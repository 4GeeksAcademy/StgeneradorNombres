let pronoun = ['the', 'my'];
let adj = ['big', 'real'];
let noun = ['pappa', 'lifes'];   
let domain = ['.es', '.com'];

for(let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let x = 0; x < noun.length; x++){
            for(let d = 0; d < domain.length; d++){
                console.log(pronoun[i] + adj[j] + noun[x] + domain[d]);
            }
        }
    }
}