(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    
    class ProductService {
        private httadapter: Object;

        constructor(){

        }

        getProduct(id:number){
            console.log('products,',{id,name:'oledTV'});
        }
        saveProduct(product:Product){
            console.log('Guardando en base de datos', product)
        }

    }

    class Mailer {
        public email: string= 'ckubota54@gmail.com';
        sendEmail(emailList: string[], template:'to-clients' | 'to-admins'){
            console.log('Enviado correo a los clients', template)
        }
    }
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(produvtService:ProductService, mailer:Mailer){
            this.productService=produvtService;
            this.mailer=mailer;
        }

    
        loadProduct( id: number ) {
          this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
        this.productService.saveProduct(product)
        }
    
        notifyClients() {
            this.mailer.sendEmail(['eduarsd@gmail.com'],'to-admins')
        }
    
    
    }
    
class CartBloc {
    private itemsInCard: Object[]=[];


    addToCart( productId: number ) {
        // Agregar al carrito de compras
        console.log('Agregando al carrito ', productId );
    }
}

    const productService = new ProductService();
    const mailer= new Mailer();

    const productBloc = new ProductBloc(productService,mailer);
    const cartbloc = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartbloc.addToCart(10);








})();