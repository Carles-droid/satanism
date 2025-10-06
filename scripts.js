// grungeEcos...
// Clase base – encapsula data y genera "ecos"

class grungeLegend {
    constructor({ nombre, banda, edadMuerte, causaMuerte, grungeVibes }) {
        this.nombre = nombre;
        this.banda = banda;
        this.edadMuerte = edadMuerte;
        this.causaMuerte = causaMuerte;
        this.grungeVibes = grungeVibes;
        // ecos
        this.ecoPhrases = [
            `Susurros de ${nombre} en la niebla: "${grungeVibes.split(' ').slice(0, 3).join(' ')}... un jeringazo."`,
            `${nombre} deja un eco de ${edadMuerte} años rotos: ${causaMuerte.split(',')[0]} vómito en mi ropa.`,
            `En un hotel de cinco estrellas, ${banda} retumba: ${grungeVibes} DCLXVI.`
        ];
    }

    // Método: Genera un eco random – arrow con Math.random
    generateEcho = () => this.ecoPhrases[Math.floor(Math.random() * this.ecoPhrases.length)];

    // Método: Calcula (creativo: 100 - edad + vibes.length * 2)
    calculateImpact = () => 100 - this.edadMuerte + this.grungeVibes.length * 2;

    // Destructuring helper para exportar basics
    getBasics = () => ({ nombre: this.nombre, banda: this.banda, impacto: this.calculateImpact() });
}

// Instancias (data base, pero ahora en clases para OOP)
const kurt = new grungeLegendrungeLegend({
    nombre: 'Kurt Cobain',
    banda: 'Nirvana',
    edadMuerte: 27,
    causaMuerte: 'Suicidio con escopeta en su casa de Seattle',
    grungeVibes: 'Escopetazo zurdo'
});

const layne = new grungeLegend({
    nombre: 'Layne Staley',
    banda: 'Alice in Chains',
    edadMuerte: 34,
    causaMuerte: 'Sobredosis de heroína y cocaína, encontrado solo en su apartamento',
    grungeVibes: 'Aspiración de contenido gástrico con cabello rosado'
});

const scott = new grungeLegendrungeLegend({
    nombre: 'Scott Weiland',
    banda: 'Stone Temple Pilots',
    edadMuerte: 48,
    causaMuerte: 'Sobredosis accidental de cocaína, MDA y alcohol en un tour',
    grungeVibes: 'Drogadicción y alcoholismo topless'
});

const chris = new grungeLegendrungeLegend({
    nombre: 'Chris Cornell',
    banda: 'Soundgarden',
    edadMuerte: 52,
    causaMuerte: 'Suicidio por ahorcamiento en un hotel de Detroit',
    grungeVibes: 'Autodestrucción perenne'
});

// Array de leyendas para methods globales
const legends = [kurt, layne, scott, chris];

// Oráculo central: Maneja colaboraciones espectrales
class GrungeOracle {
    constructor(crew) {
        this.crew = crew;
    }

    // Genera una "colaboración" random: Mapea ecos y concatena en verso
    createSpectralJam = () => {
        const randomLegends = this.crew.sort(() => 0.5 - Math.random()).slice(0, 3); // 3 random
        const ecos = randomLegends.map(leyenda => leyenda.generateEcho());
        return {
            verso: ecos.join(' | '),
            participantes: randomLegends.map(leyenda => leyenda.getBasics())
        };
    };

    // Stats global: Reduce para max impacto, map para basics
    getLegacyStats = () => {
        const impactos = this.crew.map(leyenda => ({ ...leyenda.getBasics(), eco: leyenda.generateEcho() }));
        const maxImpact = this.crew.reduce((max, leyenda) => 
            leyenda.calculateImpact() > max.impacto ? { ...leyenda.getBasics(), impacto: leyenda.calculateImpact() } : max
        , { impacto: 0 });
        return { all: impactos, topLegend: maxImpact };
    };

    // Query específica: Filtra por keyword en causa (ej: 'Sobredosis') y genera eco grupal
    queryEchoByTheme = (theme) => {
        const matches = this.crew.filter(leyenda => leyenda.causaMuerte.toLowerCase().includes(theme.toLowerCase()));
        if (matches.length === 0) return { error: 'No echoes found for that theme.' };
        const groupEcho = matches.map(leyenda => leyenda.generateEcho()).join(' \n');
        return { theme, matches: matches.map(m => m.getBasics()), groupEcho };
    };
}

// Instancia el oráculo, oh yeah
const oracle = new GrungeOracle(legends);

// Función main para demo – llama al cargar/botón
const runGrungeEchoes = () => {
    console.log('🎸 Grunge Echoes: Concierto en las Sombras 🎸');
    
    // Jam random
    const jam = oracle.createSpectralJam();
    console.log('\n--- Spectral Jam ---');
    console.log(jam.verso);
    console.table(jam.participantes);
    
    // Stats
    const stats = oracle.getLegacyStats();
    console.log('\n--- Legacy Stats ---');
    console.table(stats.all);
    console.log(`Top Impacto: ${stats.topLegend.nombre} (${stats.topLegend.impacto} puntos etéreos)`);
    
    // Query ejemplo: Sobredosis theme
    const sobredosisEcho = oracle.queryEchoByTheme('Sobredosis');
    console.log('\n--- Echo por Tema: Sobredosis ---');
    console.log(sobredosisEcho.groupEcho);
    console.table(sobredosisEcho.matches);
};

// Init: Para auto-run o manual
document.addEventListener('DOMContentLoaded', () => {
    console.log('GrungeEchoes loaded. Run runGrungeEchoes() for the ritual.');
    // Descomenta para auto: runGrungeEchoes();
});

// Exports para modularidad (si usas modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GrungeLegend, GrungeOracle, runGrungeEchoes };
}
