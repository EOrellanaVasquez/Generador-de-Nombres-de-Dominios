let pronoun = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'];
let noun = ['mago', 'mapache', 'árbol', 'invocador', 'sniper', 'camper', 'silla', 'taza'];
let adj = ['super', 'alto', 'hondo', 'cansado', 'bello', 'redondo', 'mágico', 'astral'];
let ext = ['.cl', '.com', '.com.ar', '.com.nz'];


    for (let comp1 = 0; comp1 <= pronoun.length; comp1++) {
        for (let comp2 = 0; comp2 <= noun.length; comp2++) {
            for (let comp3 = 0; comp3 <= adj.length; comp3++) {
                for (let comp4 = 0; comp4 <= ext.length; comp4++) {

                    console.log(pronoun[comp1] + noun[comp2] + adj[comp3] + ext[comp4]);
                }
            }
        }
    }

