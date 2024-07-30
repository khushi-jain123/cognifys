function showInfo(category) {
    const info = document.getElementById('info');
    let content = '';

    switch(category) {
        case 'mammals':
            content = `
                <div class="card">
                    <h3>Mammals</h3>
                    <p>Mammals are warm-blooded vertebrates that have hair or fur and whose females produce milk to feed their young. They include animals such as humans, whales, elephants, and many others.</p>
                </div>
            `;
            break;
        case 'birds':
            content = `
                <div class="card">
                    <h3>Birds</h3>
                    <p>Birds are warm-blooded vertebrates characterized by feathers, beaks, and laying hard-shelled eggs. Examples include eagles, parrots, and penguins.</p>
                </div>
            `;
            break;
        case 'reptiles':
            content = `
                <div class="card">
                    <h3>Reptiles</h3>
                    <p>Reptiles are cold-blooded vertebrates that include snakes, lizards, turtles, and crocodiles. They have scaly skin and usually lay soft-shelled eggs on land.</p>
                </div>
            `;
            break;
        case 'amphibians':
            content = `
                <div class="card">
                    <h3>Amphibians</h3>
                    <p>Amphibians are cold-blooded vertebrates that typically start their life as larvae living in water, but later metamorphose into air-breathing adults. Examples include frogs, salamanders, and newts.</p>
                </div>
            `;
            break;
        case 'fish':
            content = `
                <div class="card">
                    <h3>Fish</h3>
                    <p>Fish are cold-blooded vertebrates that live in water, breathe through gills, and typically have fins and scales. Examples include salmon, goldfish, and sharks.</p>
                </div>
            `;
            break;
        case 'insects':
            content = `
                <div class="card">
                    <h3>Insects</h3>
                    <p>Insects are small, six-legged arthropods that usually have wings. They are the most diverse group of animals, including bees, butterflies, ants, and beetles.</p>
                </div>
            `;
            break;
        case 'conservation':
            content = `
                <div class="card">
                    <h3>Conservation Efforts</h3>
                    <p>Conservation efforts are actions taken to protect and preserve the natural environment and wildlife. These efforts include habitat preservation, anti-poaching measures, and awareness campaigns.</p>
                </div>
            `;
            break;
        case 'habitats':
            content = `
                <div class="card">
                    <h3>Natural Habitats</h3>
                    <p>Natural habitats are environments where wildlife species live and thrive. Examples include forests, deserts, wetlands, and oceans. Each habitat supports different kinds of wildlife.</p>
                </div>
            `;
            break;
        default:
            content = '<p>No information available.</p>';
    }

    info.innerHTML = content;
}
