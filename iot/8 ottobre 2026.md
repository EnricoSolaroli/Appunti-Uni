first assignment
$\to$ superloop modularize it, identify stages and phases 
kernel - all the procedure to make it possible to change state /update 
we have already some function from the current state:


``` C
#include "kernel.h"
#include "config.h"
#include "core.h"
#include "input.h" 

void setup() {
  initCore();
  initInput();
  changeState(INTRO_STATE);
}

void loop(){ 
  updateStateTime(); 
  switch (getCurrentState()) { 
  case INTRO_STATE:
    intro();
    break;
  case STAGE1_STATE:
    stage1();
    break;
  case STAGE2_STATE:
    stage2();
    break;
  case FINAL_STATE:
    finalize();
    break;
  }
}
```
It's not object oriented, it's only procedural for now 
Bouncing time 

Core part - where you put the specific logics 

main `ìno` - to have a way to distribuit the functionality and not put everything in one code. 