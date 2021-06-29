var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Composites = Matter.Composites,
Common = Matter.Common,
Events = Matter.Events,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Composite = Matter.Composite,
Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
world = engine.world;

// create renderer
var render = Render.create({
element: document.body,
engine: engine,
options: {
    width: 400,
    height: 400,
    wireframes : false,
    background: 'rgb(198, 102, 152)'
}
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies

var ground = Bodies.rectangle(200, 390, 400, 20,{label:"ground",isStatic: true}),
    box = Bodies.rectangle(200, 100, 30, 50,{label:"box"});

var ball = Bodies.circle(200, 30, 20,{label:"ball1",restitution:1});
var ball2 = Bodies.circle(200, 10, 20,{label:"ball2",restitution:1});

Composite.add(world, [ground,box,ball,ball2]);

/*
//Identify which two objects are colliding
Events.on(engine, 'collisionStart', function(event) {
     console.log("Events: ", event)
     //Returns an array of the two objects that are colliding
     //store in a variable
     var pairs = event.pairs;
     console.log("Array of pairs: ", pairs)
     console.log("Element 0: ", pairs[0]);
     console.log("collision between " + pairs[0].bodyA.label + " - " + pairs[0].bodyB.label);
});
*/

Events.on(engine, 'collisionStart', function(event){
    var pairs = event.pairs;
    console.log(pairs.length)
    //loop to see all the colliding pairs
    for(var i =0; i<pairs.length; i++){
        console.log("Collision Number: "+ i);
        console.log("collision between " + pairs[i].bodyA.label + " - " + pairs[i].bodyB.label);
    }
});
