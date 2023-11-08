// 1. buscar y guardar en una variable todos los elementos img de mi web

const myImg = document.querySelectorAll('img')
console.log(myImg)

// 2. Recorrer todos los elementos img encontrados y cambiarler el src

myImg.forEach(imgNode => {
    imgNode.src = 'https://www.google.com/search?sca_esv=580203348&rlz=1C1CHBF_esES975ES975&sxsrf=AM9HkKmKF2qAXrM9o8SfTU0ZDcY2GnkPBA:1699386649564&q=gatitos+bebes&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwif9tTM1LKCAxVaU6QEHYdgC5EQ0pQJegQICxAB&biw=1920&bih=963&dpr=1#imgrc=3eJhG1t71DcytM'
})