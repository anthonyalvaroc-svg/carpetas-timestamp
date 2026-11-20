package com.ejemplo.carpetastamp;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.FileProvider;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class MainActivity extends AppCompatActivity {

    private static final String PKG_TIMESTAMP_FREE = "com.jeyluta.timestampcamerafree";
    private static final String PKG_TIMESTAMP_PRO = "com.jeyluta.timestampcamerapro";

    private File carpetaRaiz;
    private File carpetaZips;
    private File carpetaSeleccionada;
    private File archivoFotoActual;

    private TextView txtCarpetaActiva;
    private final List<String> nombresCarpetas = new ArrayList<>();
    private ArrayAdapter<String> adapter;

    private final ActivityResultLauncher<Intent> camaraLauncher =
            registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
                if (result.getResultCode() == RESULT_OK && archivoFotoActual != null && archivoFotoActual.exists()) {
                    Toast.makeText(this, "Foto guardada: " + archivoFotoActual.getName(), Toast.LENGTH_SHORT).show();
                } else if (archivoFotoActual != null && archivoFotoActual.exists()) {
                    archivoFotoActual.delete();
                }
            });

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        carpetaRaiz = new File(getExternalFilesDir(Environment.DIRECTORY_PICTURES), "MisCarpetas");
        if (!carpetaRaiz.exists()) {
            carpetaRaiz.mkdirs();
        }

        carpetaZips = new File(getCacheDir(), "zips");
        if (!carpetaZips.exists()) {
            carpetaZips.mkdirs();
        }

        txtCarpetaActiva = findViewById(R.id.txtCarpetaActiva);
        ListView listView = findViewById(R.id.listCarpetas);
        Button btnNueva = findViewById(R.id.btnNuevaCarpeta);
        Button btnTomarFoto = findViewById(R.id.btnTomarFoto);
        Button btnZipCompartir = findViewById(R.id.btnZipCompartir);

        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_single_choice, nombresCarpetas);
        listView.setAdapter(adapter);
        listView.setChoiceMode(ListView.CHOICE_MODE_SINGLE);

        listView.setOnItemClickListener((parent, view, position, id) -> seleccionarCarpeta(
                new File(carpetaRaiz, nombresCarpetas.get(position))
        ));

        btnNueva.setOnClickListener(v -> mostrarDialogoNuevaCarpeta());
        btnTomarFoto.setOnClickListener(v -> lanzarCamaraConTimestamp());
        btnZipCompartir.setOnClickListener(v -> comprimirYCompartirCarpeta());

        cargarCarpetas();
    }

    private void seleccionarCarpeta(File carpeta) {
        carpetaSeleccionada = carpeta;
        txtCarpetaActiva.setText("Carpeta seleccionada: " + carpeta.getName());
    }

    private void cargarCarpetas() {
        nombresCarpetas.clear();
        File[] hijos = carpetaRaiz.listFiles(File::isDirectory);
        if (hijos != null) {
            for (File dir : hijos) {
                nombresCarpetas.add(dir.getName());
            }
        }
        adapter.notifyDataSetChanged();
    }

    private void mostrarDialogoNuevaCarpeta() {
        EditText input = new EditText(this);
        input.setHint("Ej. Sitio_Norte_Techo");

        new AlertDialog.Builder(this)
                .setTitle("Nueva carpeta")
                .setView(input)
                .setPositiveButton("Crear", (dialog, which) -> {
                    String nombre = input.getText().toString().trim().replaceAll("[^a-zA-Z0-9_-]", "_");
                    if (!nombre.isEmpty()) {
                        File nueva = new File(carpetaRaiz, nombre);
                        if (nueva.mkdirs() || nueva.exists()) {
                            cargarCarpetas();
                            seleccionarCarpeta(nueva);
                        }
                    }
                })
                .setNegativeButton("Cancelar", null)
                .show();
    }

    private void lanzarCamaraConTimestamp() {
        if (carpetaSeleccionada == null) {
            Toast.makeText(this, "Selecciona o crea una carpeta primero", Toast.LENGTH_SHORT).show();
            return;
        }

        String fechaHora = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss", Locale.getDefault()).format(new Date());
        archivoFotoActual = new File(carpetaSeleccionada, fechaHora + ".jpg");

        Uri fotoUri = FileProvider.getUriForFile(
                this,
                getPackageName() + ".fileprovider",
                archivoFotoActual
        );

        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, fotoUri);
        intent.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION);

        if (estaInstalada(PKG_TIMESTAMP_PRO)) {
            intent.setPackage(PKG_TIMESTAMP_PRO);
        } else if (estaInstalada(PKG_TIMESTAMP_FREE)) {
            intent.setPackage(PKG_TIMESTAMP_FREE);
        }

        camaraLauncher.launch(intent);
    }

    private void comprimirYCompartirCarpeta() {
        if (carpetaSeleccionada == null) {
            Toast.makeText(this, "Selecciona una carpeta primero", Toast.LENGTH_SHORT).show();
            return;
        }

        File[] archivos = carpetaSeleccionada.listFiles(File::isFile);
        if (archivos == null || archivos.length == 0) {
            Toast.makeText(this, "La carpeta está vacía", Toast.LENGTH_SHORT).show();
            return;
        }

        String fecha = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(new Date());
        File zipSalida = new File(carpetaZips, carpetaSeleccionada.getName() + "_" + fecha + ".zip");

        try {
            comprimirCarpetaEnZip(carpetaSeleccionada, zipSalida);

            Uri zipUri = FileProvider.getUriForFile(
                    this,
                    getPackageName() + ".fileprovider",
                    zipSalida
            );

            Intent shareIntent = new Intent(Intent.ACTION_SEND);
            shareIntent.setType("application/zip");
            shareIntent.putExtra(Intent.EXTRA_STREAM, zipUri);
            shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);

            startActivity(Intent.createChooser(shareIntent, "Subir o compartir ZIP"));
        } catch (IOException e) {
            Toast.makeText(this, "Error al crear el ZIP: " + e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }

    private void comprimirCarpetaEnZip(File origen, File destinoZip) throws IOException {
        try (ZipOutputStream zos = new ZipOutputStream(new BufferedOutputStream(new FileOutputStream(destinoZip)))) {
            File[] archivos = origen.listFiles();
            if (archivos == null) return;

            byte[] buffer = new byte[4096];
            for (File archivo : archivos) {
                if (!archivo.isFile()) continue;
                try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream(archivo))) {
                    ZipEntry entry = new ZipEntry(archivo.getName());
                    zos.putNextEntry(entry);
                    int leido;
                    while ((leido = bis.read(buffer)) != -1) {
                        zos.write(buffer, 0, leido);
                    }
                    zos.closeEntry();
                }
            }
        }
    }

    private boolean estaInstalada(String packageName) {
        try {
            getPackageManager().getPackageInfo(packageName, 0);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }
}
