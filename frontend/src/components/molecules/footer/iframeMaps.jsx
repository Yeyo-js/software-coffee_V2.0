function IframeMaps() {
  return (
    <div className="flex-1 w-full lg:max-w-3xl">
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-1 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.1542817!2d-78.14626!3d-6.86913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMDguOSJTIDc4wrAwOCc0Ni41Ilc!5e0!3m2!1ses!2spe!4v1733097600000!5m2!1ses!2spe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Broun Coffee - Plaza de Armas, Celendín"
              />
            </div>
          </div>
        </div>
    )
}

export { IframeMaps }