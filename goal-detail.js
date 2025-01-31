// Fetch the goal parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const goal = urlParams.get('goal');

function goBack() {
    window.history.back();
}

// Populate the content based on the goal
function loadGoalDetail(goal) {
    const goalDetailContainer = document.getElementById('goal-detail');
    const goalTitle = document.getElementById('goal-title');

    // Switch block to load content based on goal parameter
    switch (goal) {
        case 'no-poverty':
            goalTitle.textContent = 'No Poverty';
            goalDetailContainer.innerHTML = `
                <h2>Goal: No Poverty</h2>
                <p>Poverty is more than the lack of income and resources to ensure a sustainable livelihood. It includes hunger, limited access to education, and the lack of participation in decision-making. Ending poverty in all its forms everywhere is crucial for sustainable development.</p>
                <img src="images/1.jpg" alt="No Poverty">
            `;
            break;
        case 'zero-hunger':
            goalTitle.textContent = 'Zero Hunger';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Zero Hunger</h2>
                <p>End hunger, achieve food security and improved nutrition, and promote sustainable agriculture. Hunger and malnutrition are critical challenges that hinder development and prosperity.</p>
                <img src="images/2.jpg" alt="Zero Hunger">
            `;
            break;
        case 'good-health':
            goalTitle.textContent = 'Good Health and Well-being';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Good Health and Well-being</h2>
                <p>Ensure healthy lives and promote well-being for all at all ages. Good health is essential for sustainable development, and universal health coverage is critical for reaching SDG goals.</p>
                <img src="images/3.jpg" alt="Good Health and Well-being">
            `;
            break;
        case 'quality-education':
            goalTitle.textContent = 'Quality Education';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Quality Education</h2>
                <p>Ensure inclusive, equitable, and quality education and promote lifelong learning opportunities for all. Education is a fundamental human right and a key driver for sustainable development.</p>
                <img src="images/4.jpg" alt="Quality Education">
            `;
            break;
        case 'gender-equality':
            goalTitle.textContent = 'Gender Equality';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Gender Equality</h2>
                <p>Achieve gender equality and empower all women and girls. Gender equality is not only a fundamental human right but a necessary foundation for a peaceful, prosperous, and sustainable world.</p>
                <img src="images/5.jpg" alt="Gender Equality">
            `;
            break;
        case 'clean-water':
            goalTitle.textContent = 'Clean Water and Sanitation';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Clean Water and Sanitation</h2>
                <p>Ensure availability and sustainable management of water and sanitation for all. Clean water is essential for life, health, and dignity, yet billions of people lack access to safe water.</p>
                <img src="images/6.jpg" alt="Clean Water and Sanitation">
            `;
            break;
        case 'affordable-energy':
            goalTitle.textContent = 'Affordable and Clean Energy';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Affordable and Clean Energy</h2>
                <p>Ensure access to affordable, reliable, sustainable, and modern energy for all. Energy is essential for economic growth and sustainable development.</p>
                <img src="images/7.jpg" alt="Affordable and Clean Energy">
            `;
            break;
        case 'decent-work':
            goalTitle.textContent = 'Decent Work and Economic Growth';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Decent Work and Economic Growth</h2>
                <p>Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all. Decent work is essential to reduce poverty and inequality.</p>
                <img src="images/8.jpg" alt="Decent Work and Economic Growth">
            `;
            break;
        case 'industry-innovation':
            goalTitle.textContent = 'Industry, Innovation, and Infrastructure';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Industry, Innovation, and Infrastructure</h2>
                <p>Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. Innovation and technology are key drivers of economic development and transformation.</p>
                <img src="images/9.jpg" alt="Industry, Innovation, and Infrastructure">
            `;
            break;
        case 'reduced-inequalities':
            goalTitle.textContent = 'Reduced Inequalities';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Reduced Inequalities</h2>
                <p>Reduce inequality within and among countries. Inequality affects everyone and can lead to conflicts, instability, and unequal access to opportunities.</p>
                <img src="images/9.jpg" alt="Reduced Inequalities">
            `;
            break;
        case 'sustainable-cities':
            goalTitle.textContent = 'Sustainable Cities and Communities';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Sustainable Cities and Communities</h2>
                <p>Make cities and human settlements inclusive, safe, resilient, and sustainable. Urbanization offers opportunities but also challenges related to housing, transport, and environment.</p>
                <img src="images/10.jpg" alt="Sustainable Cities and Communities">
            `;
            break;
        case 'climate-action':
            goalTitle.textContent = 'Climate Action';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Climate Action</h2>
                <p>Take urgent action to combat climate change and its impacts. Climate change is a global challenge that affects all countries, and we must work together to mitigate its effects.</p>
                <img src="images/11.jpg" alt="Climate Action">
            `;
            break;
        case 'life-below-water':
            goalTitle.textContent = 'Life Below Water';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Life Below Water</h2>
                <p>Conserve and sustainably use the oceans, seas, and marine resources for sustainable development. Oceans are essential to life on Earth, providing food, oxygen, and climate regulation.</p>
                <img src="images/12.jpg" alt="Life Below Water">
            `;
            break;
        case 'life-on-land':
            goalTitle.textContent = 'Life on Land';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Life on Land</h2>
                <p>Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests sustainably, combat desertification, halt and reverse land degradation, and halt biodiversity loss.</p>
                <img src="images/13.jpg" alt="Life on Land">
            `;
            break;
        case 'peace-justice':
            goalTitle.textContent = 'Peace, Justice, and Strong Institutions';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Peace, Justice, and Strong Institutions</h2>
                <p>Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable institutions at all levels.</p>
                <img src="images/14.jpg" alt="Peace, Justice, and Strong Institutions">
            `;
            break;
        case 'partnerships-goals':
            goalTitle.textContent = 'Partnerships for the Goals';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Partnerships for the Goals</h2>
                <p>Strengthen the means of implementation and revitalize the global partnership for sustainable development. Partnerships are key to achieving the SDGs through collaboration and shared responsibility.</p>
                <img src="images/15.jpg" alt="Partnerships for the Goals">
            `;
            break;

            case 'partnerships-goals':
            goalTitle.textContent = 'Partnerships for the Goals';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Partnerships for the Goals</h2>
                <p>Strengthen the means of implementation and revitalize the global partnership for sustainable development. Partnerships are key to achieving the SDGs through collaboration and shared responsibility.</p>
                <img src="images/16.jpg" alt="Partnerships for the Goals">
            `;
            break;

            case 'partnerships-goals':
            goalTitle.textContent = 'Partnerships for the Goals';
            goalDetailContainer.innerHTML = `
                <h2>Goal: Partnerships for the Goals</h2>
                <p>Strengthen the means of implementation and revitalize the global partnership for sustainable development. Partnerships are key to achieving the SDGs through collaboration and shared responsibility.</p>
                <img src="images/17.jpg" alt="Partnerships for the Goals">
            `;
            break;

        // Default case when goal is not found
        default:
            goalDetailContainer.innerHTML = `
                <h2>Goal Not Found</h2>
                <p>Sorry, we could not find information for this goal.</p>
            `;
    }
}

// Load the goal detail content when the page is loaded
window.onload = () => loadGoalDetail(goal);
