const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  };
  
  const normalizeName = (name) => {
    // Convert to lowercase
    name = name.toLowerCase();
    // Remove extra spaces
    name = name.trim().replace(/\s+/g, ' ');
    // Remove special characters
    name = name.replace(/[^\w\s]/g, '');
    // Remove accents
    name = removeAccents(name);
    return name;
  };
  
module.export= { normalizeName };
  