
const validation = (data) => {

        const errors = {};
        
        if (!/^[a-zA-ZñÑáÁéÉíÍóÓúÚüÜ\s0-9]{6,}$/.test(data.name)) {
          errors.name = 'debe tener al menos seis caracteres, y no contener simbolos';
        }
      
        if (!(data.image.endsWith(".jpg")||data.image.endsWith(".png")||data.image.endsWith(".svg"))) {
          errors.image = 'Enter a .svg, .jpg or .png URL for "image".';
        }

        if (!data.name) {
          errors.name = '';
      }
    
        if (!data.image) {
            errors.image = '';
        }

        return errors;
      };

export default validation;