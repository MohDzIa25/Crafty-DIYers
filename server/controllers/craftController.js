require('../models/database');
const Category = require('../models/Category');
const Craft = require('../models/Craft');

/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Craft.find({}).sort({_id: -1}).limit(limitNumber);
    const paper = await Craft.find({ 'category': 'Paper Crafts' }).limit(limitNumber);
    const artist = await Craft.find({ 'category': 'Artistic Endeavors' }).limit(limitNumber);
    const kids = await Craft.find({ 'category': 'DIY for Kids' }).limit(limitNumber);

    const diy = { latest, paper, artist , kids };

    res.render('index', { title: 'DIY Blog - Home', categories, diy } );

  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
}

/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'DIY Blog - Categoreis', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /categories/:id
 * Categories By Id
*/
exports.exploreCategoriesById = async(req, res) => { 
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Craft.find({ 'category': categoryId }).limit(limitNumber);
    res.render('categories', { title: 'DIY Blog - Categoreis', categoryById } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 
 
/**
 * GET /craft/:id
 * Recipe 
*/
exports.exploreCraft = async(req, res) => {
  try {
    let craftId = req.params.id;
    const craft = await Craft.findById(craftId);
    res.render('craft', { title: 'DIY Blog - Craft', craft } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


// /**
//  * POST /search
//  * Search 
// */
// exports.searchRecipe = async(req, res) => {
//   try {
//     let searchTerm = req.body.searchTerm;
//     let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
//     res.render('search', { title: 'Cooking Blog - Search', recipe } );
//   } catch (error) {
//     res.satus(500).send({message: error.message || "Error Occured" });
//   }
  
// }

// /**
//  * GET /explore-latest
//  * Explplore Latest 
// */
// exports.exploreLatest = async(req, res) => {
//   try {
//     const limitNumber = 20;
//     const recipe = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
//     res.render('explore-latest', { title: 'Cooking Blog - Explore Latest', recipe } );
//   } catch (error) {
//     res.satus(500).send({message: error.message || "Error Occured" });
//   }
// } 



// /**
//  * GET /explore-random
//  * Explore Random as JSON
// */
// exports.exploreRandom = async(req, res) => {
//   try {
//     let count = await Recipe.find().countDocuments();
//     let random = Math.floor(Math.random() * count);
//     let recipe = await Recipe.findOne().skip(random).exec();
//     res.render('explore-random', { title: 'Cooking Blog - Explore Latest', recipe } );
//   } catch (error) {
//     res.satus(500).send({message: error.message || "Error Occured" });
//   }
// } 


// /**
//  * GET /submit-recipe
//  * Submit Recipe
// */
// exports.submitRecipe = async(req, res) => {
//   const infoErrorsObj = req.flash('infoErrors');
//   const infoSubmitObj = req.flash('infoSubmit');
//   res.render('submit-recipe', { title: 'Cooking Blog - Submit Recipe', infoErrorsObj, infoSubmitObj  } );
// }

// /**
//  * POST /submit-recipe
//  * Submit Recipe
// */
// exports.submitRecipeOnPost = async(req, res) => {
//   try {

//     let imageUploadFile;
//     let uploadPath;
//     let newImageName;

//     if(!req.files || Object.keys(req.files).length === 0){
//       console.log('No Files where uploaded.');
//     } else {

//       imageUploadFile = req.files.image;
//       newImageName = Date.now() + imageUploadFile.name;

//       uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

//       imageUploadFile.mv(uploadPath, function(err){
//         if(err) return res.satus(500).send(err);
//       })

//     }

//     const newRecipe = new Recipe({
//       name: req.body.name,
//       description: req.body.description,
//       email: req.body.email,
//       ingredients: req.body.ingredients,
//       category: req.body.category,
//       image: newImageName
//     });
    
//     await newRecipe.save();

//     req.flash('infoSubmit', 'Recipe has been added.')
//     res.redirect('/submit-recipe');
//   } catch (error) {
//     // res.json(error);
//     req.flash('infoErrors', error);
//     res.redirect('/submit-recipe');
//   }
// }




// // Delete Recipe
// // async function deleteRecipe(){
// //   try {
// //     await Recipe.deleteOne({ name: 'New Recipe From Form' });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // deleteRecipe();


// // Update Recipe
// // async function updateRecipe(){
// //   try {
// //     const res = await Recipe.updateOne({ name: 'New Recipe' }, { name: 'New Recipe Updated' });
// //     res.n; // Number of documents matched
// //     res.nModified; // Number of documents modified
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // updateRecipe();


/**
 * Dummy Data Example 
*/

// async function insertDymmyCategoryData(){
//   try {
//     await Category.insertMany([
//       {
//         "name": "Thai",
//         "image": "thai-food.jpg"
//       },
//       {
//         "name": "American",
//         "image": "american-food.jpg"
//       }, 
//       {
//         "name": "Chinese",
//         "image": "chinese-food.jpg"
//       },
//       {
//         "name": "Mexican",
//         "image": "mexican-food.jpg"
//       }, 
//       {
//         "name": "Indian",
//         "image": "indian-food.jpg"
//       },
//       {
//         "name": "Spanish",
//         "image": "spanish-food.jpg"
//       }
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }



// async function insertDymmyRecipeData(){
//   try {
//     await Craft.insertMany([
//       { 
//         "name": "Recipe Name Goes Here",
//         "description": `Recipe Description Goes Here`,
//         "email": "recipeemail@raddy.co.uk",
//         "ingredients": [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         "category": "American", 
//         "image": "southern-friend-chicken.jpg"
//       },
//       { 
//         "name": "Recipe Name Goes Here",
//         "description": `Recipe Description Goes Here`,
//         "email": "recipeemail@raddy.co.uk",
//         "ingredients": [
//           "1 level teaspoon baking powder",
//           "1 level teaspoon cayenne pepper",
//           "1 level teaspoon hot smoked paprika",
//         ],
//         "category": "American", 
//         "image": "southern-friend-chicken.jpg"
//       },
//     ]);
//   } catch (error) {
//     console.log('err', + error)
//   }
// }

// insertDymmyRecipeData();




// // Create craft entries for each category

// // Paper Crafts
// const origamiCrane = new Craft({
//   name: 'Origami Crane',
//   description: 'Learn how to fold an origami crane.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Start with a square sheet of paper.', 'Step 2: Fold the paper diagonally to form a triangle.', 'Step 3: Fold the corners of the triangle to the top point.', 'Step 4: Fold the sides inward.', 'Step 5: Fold the bottom corner up to the top point.', 'Step 6: Fold the sides inward again.', 'Step 7: Fold the top point down.', 'Step 8: Adjust the folds to form the origami crane.'],
//   category: 'Paper Crafts',
//   image: 'origami-crane.jpg'
// });

// const paperQuilling = new Craft({
//   name: 'Paper Quilling Greeting Card',
//   description: 'Create a beautiful greeting card using paper quilling techniques.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Gather different colored strips of paper.', 'Step 2: Roll the paper strips to create various quilled shapes.', 'Step 3: Arrange the quilled shapes to form a design on a card.', 'Step 4: Glue the quilled shapes onto the card.', 'Step 5: Add additional embellishments like stickers or ribbons if desired.'],
//   category: 'Paper Crafts',
//   image: 'paper-quilling-card.jpg'
// });

// // Handmade Gifts
// const photoFrame = new Craft({
//   name: 'Personalized Photo Frame',
//   description: 'Create a personalized photo frame using craft materials.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Start with a plain wooden or cardboard frame.', 'Step 2: Paint the frame with desired colors.', 'Step 3: Add decorative elements like beads or sequins.', 'Step 4: Cut out and attach a printed photo or artwork.', 'Step 5: Apply a layer of varnish or sealant to protect the frame.'],
//   category: 'Handmade Gifts',
//   image: 'personalized-photo-frame.jpg'
// });

// const scentedCandles = new Craft({
//   name: 'Scented Candles',
//   description: 'Make scented candles at home with your favorite fragrances.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Melt candle wax in a double boiler.', 'Step 2: Add candle dye and fragrance oil to the melted wax.', 'Step 3: Pour the wax into candle molds.', 'Step 4: Insert the candle wick and let the wax cool and harden.', 'Step 5: Trim the wick and your scented candle is ready.'],
//   category: 'Handmade Gifts',
//   image: 'scented-candles.jpg'
// });

// // Artistic Endeavors
// const acrylicPainting = new Craft({
//   name: 'Acrylic Painting on Canvas',
//   description: 'Create a vibrant acrylic painting on canvas using various techniques.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Set up your canvas and painting supplies.', 'Step 2: Plan your composition and sketch it lightly on the canvas.', 'Step 3: Apply a base layer of paint to the canvas.', 'Step 4: Build up layers of colors and details to create your desired painting.', 'Step 5: Allow the painting to dry and varnish it for protection.'],
//   category: 'Artistic Endeavors',
//   image: 'acrylic-painting.jpg'
// });

// const potteryMaking = new Craft({
//   name: 'Pottery Making',
//   description: 'Experience the joy of creating pottery using clay and a pottery wheel.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Prepare the clay by wedging it to remove air bubbles.', 'Step 2: Center the clay on the pottery wheel and start shaping it.', 'Step 3: Use your hands and tools to mold and shape the clay into the desired form.', 'Step 4: Smooth the surface and add decorative details if desired.', 'Step 5: Let the pottery dry and fire it in a kiln for hardening and glazing.'],
//   category: 'Artistic Endeavors',
//  image:'pottery-making.jpg'
// });


// // Upcycling and Repurposing
// const tinCanLantern = new Craft({
//   name: 'Tin Can Lantern',
//   description: 'Repurpose tin cans into beautiful lanterns for outdoor decor.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Clean and remove any labels from the tin can.', 'Step 2: Draw a design on the can using a marker.', 'Step 3: Use a hammer and nail to create holes along the design.', 'Step 4: Paint the tin can in your desired color.', 'Step 5: Place a tea light candle inside the can and light it up.'],
//   category: 'Upcycling and Repurposing',
//   image: 'tin-can-lantern.jpg'
// });

// const denimCoasters = new Craft({
//   name: 'Denim Coasters',
//   description: 'Transform old denim jeans into stylish coasters for your home.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Cut out denim circles or squares in the desired coaster size.', 'Step 2: Sew around the edges of the denim to prevent fraying.', 'Step 3: Decorate the coasters by adding embroidery or fabric paint.', 'Step 4: Apply a layer of fabric sealant to protect the denim.', 'Step 5: Let the coasters dry completely before using them.'],
//   category: 'Upcycling and Repurposing',
//   image: 'denim-coasters.jpg'
// });

// // Others
// const dreamcatcher = new Craft({
//   name: 'Dreamcatcher',
//   description: 'Create a beautiful dreamcatcher to hang in your bedroom.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Gather a hoop, string, and decorative elements like feathers and beads.', 'Step 2: Wrap the hoop with string to create the base.', 'Step 3: Create a web-like pattern with string inside the hoop.', 'Step 4: Attach feathers and beads to the bottom of the dreamcatcher.', 'Step 5: Hang the dreamcatcher near your bed to catch and filter out bad dreams.'],
//   category: 'Others',
//   image: 'dreamcatcher.jpg'
// });

// const terrarium = new Craft({
//   name: 'Terrarium',
//   description: 'Build a mini terrarium with succulents and decorative rocks.',
//   email: 'example@example.com',
//   instructions: ['Step 1: Select a glass container with a lid for your terrarium.', 'Step 2: Add a layer of small rocks or pebbles at the bottom for drainage.', 'Step 3: Add a layer of activated charcoal to prevent odors and maintain freshness.', 'Step 4: Place a layer of potting soil on top of the charcoal.', 'Step 5: Plant succulents or other small plants into the soil and decorate with rocks and figurines.', 'Step 6: Mist the terrarium with water and close the lid for a humid environment.'],
//   category: 'Others',
//   image: 'terrarium.jpg'
// });
// const craftEntries = [
//   origamiCrane,
//   paperQuilling,
//   photoFrame,
//   scentedCandles,
//   acrylicPainting,
//   potteryMaking,
//   tinCanLantern,
//   denimCoasters,
//   dreamcatcher,
//   terrarium
// ];

// Craft.create(craftEntries)
//   .then(() => {
//     console.log('Craft entries inserted successfully.');
//     // Additional code or logic after insertion
//   })
//   .catch((err) => {
//     console.error('Error inserting craft entries:', err);
//     // Handle error
//   });