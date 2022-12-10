export class Producto {
    nombre: string=''; //name?: string (campo opcional)
    precio: number=0;
    foto: string='data:image/jpeg;base64,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';
    id?:string;
    
// eslint-disable-next-line eol-last
}

// export const Productos = [{
//       nombre:"Sopa en lata",
//       precio:25.12,
//       foto:"https://dbdzm869oupei.cloudfront.net/img/sticker/preview/2170.png"
//   },
//   {
//       nombre:"Leche Lala",
//       precio:26,
//       foto:"https://superfenix.mx/wp-content/uploads/2022/06/7501020548495.jpg"
//   },
//   {
//       nombre:"Arroz",
//       precio:22.50,
//       foto:"https://m.media-amazon.com/images/I/71uxWp5AqnL._AC_SX425_.jpg"
//   },
//   {
//       nombre:"Gel",
//       precio:98.36,
//       foto:"https://tiendasneto.com.mx/media/catalog/product/cache/cb1e6b076f68ee0ac6e5e542f63310fa/7/1/7100004654-1_12.jpg"
//   },
//   {
//       nombre:"Gel Antibacterial",
//       precio:29.99,
//       foto:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750224476448L.jpg"
//   },
//   {
//       nombre:"Gel",
//       precio:98,
//       foto:""
//   }];

  