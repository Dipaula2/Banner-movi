var animations = [
  [
     {
       id: '#i01',
       duration: 1250,
       delayBefore: 250,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, scale:[1,1.25]}
     }, 
     {
       id: '#i02-1',
       duration: 450,
       delayBefore: 250,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0}
     },  
     {
       id: '#i02',
       duration: 650,
       delayBefore: 350,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0, top:0}
     },  
     {
       id: '#i03',
       duration: 750,
       delayBefore: 550,
       delayAfter: 3000,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0}
     },      
   ],
   [
     {
       id: '#i04',
       duration: 650,
       delayBefore: 0,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1}
     }, 
     {
       id: '#i05',
       duration: 650,
       delayBefore: 250,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, top:0}
     },  
     {
       id: '#i06',
       duration: 650,
       delayBefore: 350,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0, top:0}
     },  
     {
       id: '#i06-1',
       duration: 750,
       delayBefore: 450,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0}
     },  
     {
       id: '#i06-2',
       duration: 750,
       delayBefore: 550,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0}
     },  
     {
       id: '#i06-3',
       duration: 750,
       delayBefore: 650,
       delayAfter: 2500,
       easing: "easeOutCubic",
       animations: {opacity:1, left:0}
     },    
   ],
   [,   
     {
       id: '#i06',
       duration: 650,
       delayBefore: 100,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:0, left:"100px"}
     },     
     {
       id: '#i06-1',
       duration: 650,
       delayBefore: 200,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:0, left:"100px"}
     },     
     {
       id: '#i06-2',
       duration: 650,
       delayBefore: 300,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:0, left:"100px"}
     },     
     {
       id: '#i06-3',
       duration: 650,
       delayBefore: 400,
       delayAfter: 0,
       easing: "easeOutCubic",
       animations: {opacity:0, left:"100px"}
     },     
   ],
   [, 
    {
      id: '#i07',
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },  
    {
      id: '#i08',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i08-1',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },  
    {
      id: '#i08-2',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },  
    {
      id: '#i08-3',
      duration: 750,
      delayBefore: 650,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },    
  ],
  [
    {
      id: '#i09',
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1,1.25]}
    }, 
    {
      id: '#i10',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, blur:[0,5]}
    },  
    {
      id: '#i10-1',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, blur:[0,5]}
    },  
    {
      id: '#i11',
      duration: 750,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, blur:[0,5]}
    },  
    {
      id: '#i12',
      duration: 750,
      delayBefore: 750,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, blur:[0,5]}
    },   
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      