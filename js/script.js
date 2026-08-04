// 1. Load Profile
fetch("data/profile.json")
.then(response => response.json())
.then(profile => {

    document.getElementById("name").innerText = profile.name;
    document.getElementById("title").innerText = profile.title;
    document.getElementById("summary").innerText = profile.summary;
    document.getElementById("location").innerText = profile.location;

});


// 2. Load Projects
fetch("data/projects.json")
.then(response => response.json())
.then(projects => {

    let projectHTML = "";

    projects.forEach(project => {

        projectHTML += `
            <div class="project-card">

                <h3>${project.name}</h3>

                <p>${project.description}</p>

                <p>
                    ${project.technology.join(" | ")}
                </p>

                <a href="${project.github}" target="_blank">
                    View GitHub
                </a>

            </div>
        `;

    });


    document.getElementById("projects-container").innerHTML = projectHTML;

});


// 3. Load Experience
fetch("data/experience.json")
.then(response => response.json())
.then(experiences => {

    let experienceHTML = "";

    experiences.forEach(exp => {

        experienceHTML += `

            <div class="experience-card">

                <h3>${exp.role}</h3>

                <h4>${exp.company}</h4>

                <p>${exp.domain}</p>

                <p>${exp.duration}</p>

                <ul>
                    ${exp.highlights
                    .map(item => `<li>${item}</li>`)
                    .join("")}
                </ul>

            </div>

        `;

    });


    document.getElementById("experience-container")
    .innerHTML = experienceHTML;

});

// 4. Load achievements

fetch("data/achievements.json")
.then(response => response.json())
.then(achievements => {

    let achievementHTML = "";

    achievements.forEach(item => {

        achievementHTML += `
            <p>
                ✓ ${item}
            </p>
        `;

    });

    document.getElementById("achievements-container")
    .innerHTML = achievementHTML;

});


// 5. Load certifications

fetch("data/certifications.json")
.then(response => response.json())
.then(certifications => {

    let certificationHTML = "";

    certifications.forEach(cert => {

        certificationHTML += `

            <div class="certification-card">

                <h3>${cert.name}</h3>

                <p>
                    ${cert.provider}
                </p>

                <p>
                    ${cert.year}
                </p>

            </div>

        `;

    });


    document.getElementById("certifications-container")
    .innerHTML = certificationHTML;

});



fetch("data/skills.json")
.then(response => response.json())
.then(skills => {

    let skillHTML = "";

    for (let category in skills) {

        skillHTML += `

        <div class="skill-card">

            <h3>${category}</h3>

            <div class="skill-list">

                ${skills[category]
               .map(skill => `<span class="skill-badge">${skill}</span>`)
                .join("")}

            </div>

        </div>

        `;

    }


    document.getElementById("skills-container")
    .innerHTML = skillHTML;

});