
const setupgenres = (selectedgenres) => {
    if(selectedgenres.length < 1) {
        return "";
    }
    
    const id = selectedgenres.map((genre) => genre.id)
    return id.reduce((acc,curr) =>acc + "," + curr);
};

export default setupgenres;