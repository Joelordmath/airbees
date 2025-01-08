import qrcode

# Función para generar y guardar el código QR
def generar_qr(enlace, nombre_archivo):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(enlace)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(nombre_archivo)

# Enlace a la página web con los enlaces a los documentos
enlace = "https://joelordmath.github.io/QRs/"
nombre_archivo = "QR_Apartamento.png"

# Generar código QR que apunte a la página web
generar_qr(enlace, nombre_archivo)

print("¡Código QR generado con éxito!")
