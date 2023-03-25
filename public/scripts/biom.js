console.log("js file linked");

const proteins = [
{
    id: '1',
    shortName: 'Cys C',
    commonName: 'Serum cystatin C',
    ncib: '9031',
    uniProtKB: 'P01034',
    coverImage: '../assets/images/bg-2.jpg'
},
{
    id: '2',
    shortName: 'KIM 1',
    commonName: 'kidney injury molecule-1',
    ncib: '26762',
    uniProtKB: 'Q96D42',
    coverImage: '../assets/images/bg-1.jpg'
},
{
    id: '3',
    shortName: 'IL-18',
    commonName: 'Interleukin 18',
    ncib: '8809',
    uniProtKB: 'Q13478',
    coverImage: '../assets/images/bg-3.jpg'
}]

function onClick(id){
    console.log('biom-detail')
    window.location.href="biom-detail.html";
}

const parent = document.getElementById('parent')

if(parent) {
    for(const protein of proteins){
        const div = document.createElement('div');
        div.className = 'col-3 mt-3';

        let htmlString = `<div class="card biom-card rounded-4 overflow-hidden" onclick="onClick('${protein.id}')">
                            <img class="image" src="${protein.coverImage}" >
                            <div class="content">
                                <h5>${protein.shortName}</h5>
                                <p>${protein.commonName}</p>
                            </div>
                        </div>`;
        div.innerHTML = htmlString.trim();
        parent.appendChild(div);
    }
    
}


console.log(parent);