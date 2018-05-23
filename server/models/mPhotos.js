console.log('Connection to back-end models successful');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'image title required'],
    },
    description: String,
    file_name: {
        type: String,
        required: [ true, 'image file name required'],
        unique: true,
    },
    tags: [String],
    orientation: { // 'vertical' or 'horizontal' - used to determine layout in html
        type: String,
        required: [ true, 'image orientation required'],
    },
});


var arr = [
    { name: "Ballybunion Beach", description: "Ballybunnion, Co. Kerry", file_name: "beach1.jpg", tags: ["ocean","water","landscape","Ireland"], orientation: "horizontal" },
    { name: "Belvelly Sunset", description: "Skyline outside of Belvelly Castle, Co. Cork", file_name: "sunset2.jpg", tags: ["sunset","landscape","Ireland"], orientation: "horizontal" },
    { name: "Bent", description: "Louisiana Swamp", file_name: "swamp1.jpg", tags: ["summer", "water", "swamp", "landscape"], orientation: "horizontal" },
    { name: "Black Sea Nettle", description: "(Chrysaora Achlyos)", file_name: "jelly1.jpg", tags: ["animals","jellyfish","water"], orientation: "vertical" },
    { name: "Breakthrough", description: "Parking lot in Albany, New York", file_name: "sky1.jpg", tags: ["sunset"], orientation: "horizontal" },
    { name: "Castle Stairwell", description: "Stairwell in Carrigafoyle Castle, Co. Kerry", file_name: "stairs1.jpg", tags: ["Ireland","landmark","castle"], orientation: "vertical" },
    { name: "Cobh from the Hill", description: "View from St. Colman's Cathedral, Kilgarvan, Cobh, Co", file_name: "cobh2.jpg", tags: ["sunset","Ireland","water","landscape"], orientation: "horizontal" },
    { name: "Common Cuttlefish", description: "Sepia Officinalis", file_name: "cuttlefish1.jpg", tags: ["water","animals"], orientation: "horizontal" },
    { name: "Country House", description: "Belvelly, Co. Cork", file_name: "house1.jpg", tags: ["landscape","Ireland","country"], orientation: "horizontal" },
    { name: "Cracked", description: "Somewhere in New Orleans, Louisiana", file_name: "nola1.jpg", tags: ["NOLA", "urban decay"], orientation: "horizontal" },
    { name: "Doonagore Castle", description: "Ballycullaun, Co. Clare", file_name: "doonagore1.jpg", tags: ["castle", "Ireland","landmark","ocean","water"], orientation: "vertical" },
    { name: "Drombeg Stone Circle", description: "Megalithic stone circle c. 1100 BCE., Co. Cork", file_name: "drombeg1.jpg", tags: ["Ireland","landmark","landscape","stone age"], orientation: "horizontal" },
    { name: "Dunguaire Castle", description: "Dungory East, Kinvarra, Co. Galway", file_name: "dunguaire1.jpg", tags: ["castle","Ireland","landmark","landscape"], orientation: "horizontal" },
    { name: "Flame Jelly", description: "(Rhopilema Esculentum)", file_name: "jelly4.jpg", tags: ["animals","jellyfish","water"], orientation: "vertical" },
    { name: "Green Bottle", description: "Bar in New Orleans, Louisiana", file_name: "bar1.jpg", tags: ["NOLA", "summer"], orientation: "horizontal" },
    { name: "Hideaway", description: "Louisiana Swamp", file_name: "swamp3.jpg", tags: ["summer", "water", "swamp", "landscape"], orientation: "horizontal" },
    { name: "Jelly Cluster", description: "", file_name: "jelly6.jpg", tags: ["animals","jellyfish","water"], orientation: "horizontal" },
    { name: "Kylemore Lake", description: "Pollacapall Lough, Connemara, Co. Galway", file_name: "lake1.jpg", tags: ["Ireland","landscape","water","lake"], orientation: "vertical" },
    { name: "Leamaneh Castle", description: "Leamaneh North, Co. Clare", file_name: "leamaneh1.jpg", tags: ["Ireland","castle","landmark"], orientation: "horizontal" },
    { name: "Lifesaver", description: "Lough Leane, The Lake Hotel, Castlelough, Killarney, Co. Kerry", file_name: "leane1.jpg", tags: ["water","landscape","Ireland"], orientation: "vertical" },
    { name: "Moon Jelly", description: "(Aurelia Aurita)", file_name: "jelly5.jpg", tags: ["animals","jellyfish","water"], orientation: "vertical" },
    { name: "Pacific Sea Nettle", description: "(Chrysaora Fuscescens)", file_name: "jelly2.jpg", tags: ["animals","jellyfish","water"], orientation: "vertical" },
    { name: "Pacific Sea Nettle", description: "(Chrysaora Fuscescens)", file_name: "jelly3.jpg", tags: ["animals","jellyfish","water"], orientation: "vertical" },
    { name: "Poulnabrone Dolmen", description: "Megalithic portal tomb c. 4200 BCE., the Burren, Co. Clare", file_name: "dolmen1.jpg", tags: ["Ireland","landmark","stone age"], orientation: "vertical" },
    { name: "Riverside", description: "River Lee, Cobh, Co. Cork", file_name: "cobh3.jpg", tags: ["water","Ireland","landscape","sunset"], orientation: "horizontal" },
    { name: "Rock of Cashel", description: "View from Hore Abbey, Co. Tipperary", file_name: "cashel1.jpg", tags: ["Ireland","landmark","landscape"], orientation: "horizontal" },
    { name: "Rogue Sheep", description: "Co. Tipperary", file_name: "sheep1.jpg", tags: ["Ireland","animals","sheep"], orientation: "horizontal" },
    { name: "Rose", description: "Garden at the Winchester Mystery House, San Jose, CA", file_name: "rose1.jpg", tags: ["garden","flowers"], orientation: "vertical" },
    { name: "Six Flags", description: "Entrance to Six Flags, New Orleans, Louisiana", file_name: "six_flags1.jpg", tags: ["NOLA", "urban decay"], orientation: "vertical" },
    { name: "Street Art", description: "New Orleans, Louisiana", file_name: "paintings1.jpg", tags: ["NOLA"], orientation: "horizontal" },
    { name: "Streets of Cobh", description: "West Beach, Kilgarvan, Cobh, Co. Cork", file_name: "cobh1.jpg", tags: ["Ireland"], orientation: "horizontal" },
    { name: "Sunset at St. Patrick's Rock", description: "Rock of Cashel, Co. Tipperary", file_name: "sunset1.jpg", tags: ["sunset","Ireland","landscape","landmark","animals"], orientation: "horizontal" },
    { name: "Terminator II", description: "Swamp tour boat, Louisiana", file_name: "boat1.jpg", tags: ["summer", "water", "swamp"], orientation: "horizontal" },
    { name: "View from the Rock", description: "View of View of Hore Abbey from the Rock of Cashel, Co. Tipperary", file_name: "hore1.jpg", tags: ["sunset","Ireland","animals","landscape","landmark","sheep"], orientation: "horizontal" },
    { name: "Wandering Sheep", description: "Ring of Kerry, Co. Kerry", file_name: "sheep2.jpg", tags: ["landscape","Ireland","animals","sheep"], orientation: "horizontal" },
    { name: "Windmills", description: "Ring of Kerry, Co. Kerry", file_name: "windmills1.jpg", tags: ["Ireland","landscape"], orientation: "horizontal" },

];




const photos = mongoose.model('Photos', PhotoSchema);


photos.insertMany(arr, function(error, docs) {});


module.exports = mongoose.model('Photos', PhotoSchema);
