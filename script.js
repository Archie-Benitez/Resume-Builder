document.getElementById('generate-btn').addEventListener('click', () => {
    document.getElementById('preview-name').textContent =
        document.getElementById('name').value;

    document.getElementById('preview-title').textContent =
        document.getElementById('title').value;
    
    document.getElementById('preview-summary').textContent =
        document.getElementById('summary').value;
    
    document.getElementById('preview-education').textContent =
        document.getElementById('education').value;

    document.getElementById('preview-experience').textContent =
        document.getElementById('experience').value;

    const skills = document
        .getElementById('skills')
        .value.split(",")
        .map((s) => s.trim())
        .filter((s) => s);
        
    const skillList = document.getElementById('preview-skills');
    skillList.innerHTML = "";
    skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillList.appendChild(li);
    });
})