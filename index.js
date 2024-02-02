const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion, ExplainVerbosity, ObjectId  } = require('mongodb');
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config();


app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2grod.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
     await client.connect();
    
    const FacebookAccount= client.db('toolsService').collection('account')
    const SheetDb = client.db('toolsService').collection('sellsReport')
    const CompanyDb = client.db('toolsService').collection('companyExpance')
    const CompanyDb2 = client.db('toolsService').collection('companyExpance2')
    const CompanyDb3 = client.db('toolsService').collection('companyExpance3')    
  const EmployeDb = client.db('toolsService').collection('employee')
  const OrdersDb = client.db('orders').collection('employee')

    const Attend1 = client.db('toolsService').collection('attend1')
    app.get('/service',async(req,res)=>{
        const service = await serviceCollection.find().toArray();
        res.send(service)
    });
   app.get('/service/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const query = { _id: ObjectId(id) };
    console.log(query);
    const service = await serviceCollection.findOne(query);
    res.send(service);
   })


    //  orderCollection
  



app.put('/orders/:id', async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const filter = { _id: ObjectId(id) };
  const option = { upsert: true };
  const udatedDoc = {
      $set: {
          name: updateData.name,
          price: updateData.price,
          quantity: updateData.quantity,
          email:updateData.email,
          paid:updateData.paid,

      }
  }
  const result = await orderCollection.updateOne(filter, udatedDoc, option)
  res.send(result)
})


// reveis collection
app.post('/reviews', async (req, res) => {
    const orders = req.body;
    
    const result = await reviewsCollection.insertOne(orders);
     res.send(result)
  })
  app.get('/reviews' ,async(req,res)=>{
    const orderses= await reviewsCollection.find().toArray();
    res.send(orderses)
  })


  app.post('/account', async (req, res) => {
    const orders = req.body;
    
    const results = await FacebookAccount.insertOne(orders);
     res.send(results)
  })
  // new
  app.post('/sheetPost', async (req, res) => {
    const orders = req.body;
    
    const results = await SheetDb.insertOne(orders);
     res.send(results)
     console.log(orders)
  })
  //get total sells report
  app.get('/totalSell' ,async(req,res)=>{
    const orderses= await SheetDb.find().toArray();

    const filteredData = orderses.filter(item => item.email === 'shop1@gmail.com');
    res.send(orderses)
  })

   app.get('/totalSell/:id',async(req,res)=>{
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    console.log(query);
    const order = await SheetDb.findOne(query);
    res.send(order)
  })
    // sells 1
   app.get('/totalSell1', async (req, res) => {
            const decodedEmail = "shop1@gmail.com";
            const email ="shop1@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  //  sells 2
  app.get('/totalSell2', async (req, res) => {
            const decodedEmail = "shop2@gmail.com";
            const email ="shop2@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 3
  app.get('/totalSell3', async (req, res) => {
            const decodedEmail = "shop3@gmail.com";
            const email ="shop3@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 4
  app.get('/totalSell4', async (req, res) => {
            const decodedEmail = "shop4@gmail.com";
            const email ="shop4@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 5
  app.get('/totalSell5', async (req, res) => {
            const decodedEmail = "shop5@gmail.com";
            const email ="shop5@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 6
  app.get('/totalSell6', async (req, res) => {
            const decodedEmail = "shop6@gmail.com";
            const email ="shop6@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 7
  app.get('/totalSell7', async (req, res) => {
            const decodedEmail = "shop7@gmail.com";
            const email ="shop7@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 8
  app.get('/totalSell8', async (req, res) => {
            const decodedEmail = "shop8@gmail.com";
            const email ="shop8@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sels 9
  app.get('/totalSell9', async (req, res) => {
            const decodedEmail = "shop9@gmail.com";
            const email ="shop9@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 10
  app.get('/totalSell10', async (req, res) => {
            const decodedEmail = "shop10@gmail.com";
            const email ="shop10@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 11
  app.get('/totalSell11', async (req, res) => {
            const decodedEmail = "shop11@gmail.com";
            const email ="shop11@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 112
  app.get('/totalSell12', async (req, res) => {
            const decodedEmail = "shop12@gmail.com";
            const email ="shop12@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 13
  app.get('/totalSell13', async (req, res) => {
            const decodedEmail = "shop13@gmail.com";
            const email ="shop13@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 14
  app.get('/totalSell14', async (req, res) => {
            const decodedEmail = "shop14@gmail.com";
            const email ="shop14@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })
  // sells 15
  app.get('/totalSell15', async (req, res) => {
            const decodedEmail = "shop15@gmail.com";
            const email ="shop15@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })

  // delete the value
    app.delete('/items/:id', async (req, res) => {
    const id = req.body.id;

    const query = { _id: ObjectId(id) };
    const result = await SheetDb.deleteOne(query);
    res.send(result);
    // res.send(id)
});
  // delete the value
    app.delete('/company/:id', async (req, res) => {
    const id = req.body.id;

    const query = { _id: ObjectId(id) };
    const result = await CompanyDb.deleteOne(query);
    res.send(result);
    // res.send(id)
});
           app.delete('/company2/:id', async (req, res) => {
    const id = req.body.id;

    const query = { _id: ObjectId(id) };
    const result = await CompanyDb2.deleteOne(query);
    res.send(result);
    // res.send(id)
});
           app.delete('/company3/:id', async (req, res) => {
    const id = req.body.id;

    const query = { _id: ObjectId(id) };
    const result = await CompanyDb3.deleteOne(query);
    res.send(result);
    // res.send(id)
});
       app.post('/company', async (req, res) => {
    const orders = req.body;
    
    const results = await CompanyDb.insertOne(orders);
     res.send(results)
     console.log(orders)
  })
    app.post('/company2', async (req, res) => {
    const orders = req.body;
    
    const results = await CompanyDb2.insertOne(orders);
     res.send(results)
     console.log(orders)
  })
    app.post('/company3', async (req, res) => {
    const orders = req.body;
    
    const results = await CompanyDb3.insertOne(orders);
     res.send(results)
     console.log(orders)
  })
   app.get('/company' ,async(req,res)=>{
    const orderses= await CompanyDb.find().toArray();
    res.send(orderses)
  }) 
   app.get('/company2' ,async(req,res)=>{
    const orderses= await CompanyDb2.find().toArray();
    res.send(orderses)
  }) 
   app.get('/company3' ,async(req,res)=>{
    const orderses= await CompanyDb3.find().toArray();
    res.send(orderses)
  }) 

     app.get('/love/:id', async (req, res) => {
    const id = req.body.id;
        const query = { id: id };
        const cursor = SheetDb.find(query);
        const orders = await cursor.toArray();
        res.send(orders);
  console.log(orders)
})
         app.get('/lover', async (req, res) => {
            const decodedEmail = "shop1@gmail.com";
            const email ="shop1@gmail.com"
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = SheetDb.find(query);
                const orders = await cursor.toArray();
                res.send(orders);
            }
            else {
                res.status(403).send({ message: 'forbiden  accespoitn' })
            }
        })

          app.post('/attend1', async (req, res) => {
    const orders = req.body;
    console.log(orders)
    const results = await Attend1.insertOne(orders);
     res.send(results)
  })
// geting from attend
app.get('/attend1' ,async(req,res)=>{
  const orderses= await Attend1.find().toArray();
  res.send(orderses)
}) 
app.delete('/attend1/:id', async (req, res) => {
  const id = req.body.id;

  const query = { _id: ObjectId(id) };
  const result = await Attend1.deleteOne(query);
  res.send(result);
  // res.send(id)

});
  
app.post('/addMember',async(req,res)=>{
  const orders = req.body;
  const results = await EmployeDb.insertOne(orders)
  res.send(results)
})
app.get('/addMember',async(req,res)=>{
  const employee = await EmployeDb.find().toArray();
  res.send(employee);
})
// delete the value
    app.delete('/addMember/:id', async (req, res) => {
    const id = req.body.id;

    const query = { _id: ObjectId(id) };
    const result = await EmployeDb.deleteOne(query);
    res.send(result);
    // res.send(id)
});        
        // for test
app.post('/orders',async(req,res)=>{
  const orders = req.body;
  const results = await ordersDb.insertOne(orders)
  res.send(results)
})
             app.get('/orders/:id', async (req, res) => {
    const id = req.body.id;
        const query = { id: id };
        const cursor = ordersDv.find(query);
        const orders = await cursor.toArray();
        res.send(orders);
})
    app.delete('/orders/:id', async (req, res) => {
    const id = req.body.id;

    const query = { _id: ObjectId(id) };
    const result = await ordersDb.deleteOne(query);
    res.send(result);
    // res.send(id)
}); 

  
    }
    finally{

    }

}

run().catch(console.dir)
app.get('/',(req,res)=>{
    res.send('This is form why doest bangladesh computer')
})
app
app.listen(port,()=>{
    console.log('assginment-12port is  ',port);
})
