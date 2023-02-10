const getLeft = document.getElementById('getLeft');
const hideLeft = document.getElementById('hideLeft');

const selectBrand =document.getElementById('selectBrand');


hideLeft.addEventListener('click',()=>{
    getLeft.classList.toggle('show');
})

const laptop =[
    {
        id: 1,

        brand:"lenovo",
        processor:"i5",
        graphics:"Intel iris XE",
        ram: 4,
        rom: 512
    },
    {
        id: 2,
        brand:"dell",
        processor:"i3",
        graphics:"Intel UHD",
        ram: 4,
        rom: 512
    },
    {
        id: 3,
        brand:"hp",
        processor:"i5",
        graphics:"Intel iris XE",
        ram: 4,
        rom: 512
    },
    {
        id: 4,
        brand:"lenovo",
        processor:"i3",
        graphics:"amd-radeon",
        ram: 8,
        rom: 256
    },
    {
        id: 5,
        brand:"dell",
        processor:"i5",
        graphics:"Intel iris XE",
        ram: 8,
        rom: 512
    },
    {
        id: 6,
        brand:"lenovo",
        processor:"i5",
        graphics:"amd-radeon",
        ram: 4,
        rom: 512
    },
    {
        id: 7,
        brand:"hp",
        processor:"i5",
        graphics:"Intel UHD",
        ram: 4,
        rom: 512
    }
];

const displayData=()=>{
document.getElementById('tbody').innerHTML=" ";

    laptop.forEach((ele,index)=>{

        let createTR = document.createElement('tr');

        let numberTD = document.createElement('td');
        numberTD.append(index+1); 

        let brandTD = document.createElement('td');
        brandTD.append(ele.brand);

        let processorTD = document.createElement('td');
        processorTD.append(ele.processor);

        let graphicsTD = document.createElement('td');
        graphicsTD.append(ele.graphics);

        let ramTD = document.createElement('td');
        ramTD.append(ele.ram);

        let romTD = document.createElement('td');
        romTD.append(ele.rom);


        createTR.appendChild(numberTD);
        createTR.appendChild(brandTD);
        createTR.appendChild(brandTD);
        createTR.appendChild(processorTD);
        createTR.appendChild(graphicsTD);
        createTR.appendChild(ramTD);
        createTR.appendChild(romTD);
        document.getElementById('tbody').appendChild(createTR);

    });
}
displayData();

const filter =()=>{
     laptop.filter((ele,i)=>{
        return ele.brand=="dell";
    })
    
    
}
 
