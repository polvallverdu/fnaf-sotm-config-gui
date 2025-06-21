const Collect_HatCollect_Hat = "Collect_Hat.Collect_Hat";
const Collect_SharpayPlushieCollect_SharpayPlushie =
  "Collect_SharpayPlushie.Collect_SharpayPlushie";
const Collect_HedgehogMaskCollect_HedgehogMask =
  "Collect_HedgehogMask.Collect_HedgehogMask";
const Collect_WaterGameCollect_WaterGame =
  "Collect_WaterGame.Collect_WaterGame";
const Collect_ChicaCupCollect_ChicaCup = "Collect_ChicaCup.Collect_ChicaCup";
const Collect_PrizeWheel_GrandPrizeCollect_PrizeWheel_GrandPrize =
  "Collect_PrizeWheel_GrandPrize.Collect_PrizeWheel_GrandPrize";
const Collect_ArmyKnifeCollect_ArmyKnife =
  "Collect_ArmyKnife.Collect_ArmyKnife";
const Collect_RecordCollect_Record = "Collect_Record.Collect_Record";
const Collect_SewingKitCollect_SewingKit =
  "Collect_SewingKit.Collect_SewingKit";
const Collect_HammerCollect_Hammer = "Collect_Hammer.Collect_Hammer";
const Collect_BlocksCollect_Blocks = "Collect_Blocks.Collect_Blocks";
const Collect_DoctorKitCollect_DoctorKit =
  "Collect_DoctorKit.Collect_DoctorKit";
const Collect_ToyPhoneCollect_ToyPhone = "Collect_ToyPhone.Collect_ToyPhone";
const Collect_VacuumPetCollect_VacuumPet =
  "Collect_VacuumPet.Collect_VacuumPet";
const Turn_Crank_StorageTurn_Crank_Storage =
  "Turn_Crank_Storage.Turn_Crank_Storage";
const Collect_WhiteTigerCollect_WhiteTiger =
  "Collect_WhiteTiger.Collect_WhiteTiger";
const ProjectorRoom_FilmReel_AProjectorRoom_FilmReel_A =
  "ProjectorRoom_FilmReel_A.ProjectorRoom_FilmReel_A";
const Collect_SnowGlobeCollect_SnowGlobe =
  "Collect_SnowGlobe.Collect_SnowGlobe";
const Collect_HoneyBottleCollect_HoneyBottle =
  "Collect_HoneyBottle.Collect_HoneyBottle";
const Collect_NightLightCollect_NightLight =
  "Collect_NightLight.Collect_NightLight";
const Collect_PizzaMakerCollect_PizzaMaker =
  "Collect_PizzaMaker.Collect_PizzaMaker";
const ProjectorRoom_FilmReel_FProjectorRoom_FilmReel_F =
  "ProjectorRoom_FilmReel_F.ProjectorRoom_FilmReel_F";
const ProjectorRoom_FilmReel_DProjectorRoom_FilmReel_D =
  "ProjectorRoom_FilmReel_D.ProjectorRoom_FilmReel_D";
const Collect_TicketBookCollect_TicketBook =
  "Collect_TicketBook.Collect_TicketBook";
const Collect_FoxyPuppetCollect_FoxyPuppet =
  "Collect_FoxyPuppet.Collect_FoxyPuppet";
const ProjectorRoom_FilmReel_CProjectorRoom_FilmReel_C =
  "ProjectorRoom_FilmReel_C.ProjectorRoom_FilmReel_C";
const Collect_BirthdayCakeCollect_BirthdayCake =
  "Collect_BirthdayCake.Collect_BirthdayCake";
const Collect_FIshingNetCollect_FishingNet =
  "Collect_FIshingNet.Collect_FishingNet";
const Collect_BootCollect_Boot = "Collect_Boot.Collect_Boot";
const Collect_BallCollect_Ball = "Collect_Ball.Collect_Ball";

export const INVENTORY_ITEMS = [
  Collect_HatCollect_Hat,
  Collect_SharpayPlushieCollect_SharpayPlushie,
  Collect_HedgehogMaskCollect_HedgehogMask,
  Collect_WaterGameCollect_WaterGame,
  Collect_ChicaCupCollect_ChicaCup,
  Collect_PrizeWheel_GrandPrizeCollect_PrizeWheel_GrandPrize,
  Collect_ArmyKnifeCollect_ArmyKnife,
  Collect_RecordCollect_Record,
  Collect_SewingKitCollect_SewingKit,
  Collect_HammerCollect_Hammer,
  Collect_BlocksCollect_Blocks,
  Collect_DoctorKitCollect_DoctorKit,
  Collect_ToyPhoneCollect_ToyPhone,
  Collect_VacuumPetCollect_VacuumPet,
  Turn_Crank_StorageTurn_Crank_Storage,
  Collect_WhiteTigerCollect_WhiteTiger,
  ProjectorRoom_FilmReel_AProjectorRoom_FilmReel_A,
  Collect_SnowGlobeCollect_SnowGlobe,
  Collect_HoneyBottleCollect_HoneyBottle,
  Collect_NightLightCollect_NightLight,
  Collect_PizzaMakerCollect_PizzaMaker,
  ProjectorRoom_FilmReel_FProjectorRoom_FilmReel_F,
  ProjectorRoom_FilmReel_DProjectorRoom_FilmReel_D,
  Collect_TicketBookCollect_TicketBook,
  Collect_FoxyPuppetCollect_FoxyPuppet,
  ProjectorRoom_FilmReel_CProjectorRoom_FilmReel_C,
  Collect_BirthdayCakeCollect_BirthdayCake,
  Collect_FIshingNetCollect_FishingNet,
  Collect_BootCollect_Boot,
  Collect_BallCollect_Ball,
];

export type InventoryItemId = (typeof INVENTORY_ITEMS)[number];

export const INVENTORY_ITEM_DETAILS: Record<
  InventoryItemId,
  {
    id: string;
    type: "Collectables" | "Items";
    name?: string;
    explanation?: string;
  }
> = {
  "Collect_Hat.Collect_Hat": {
    id: "Collect_Hat.Collect_Hat",
    type: "Collectables",
    name: "Deadeye Roxy Rodeo Hat",
    explanation: `Located in hallway between "Retail Showroom" and "Security Office" with no permission required

- How to access location: After the starting Welcome Show head down the hallway towards the "Security Office". After passing the Elephant Mascot on the left there will be short stairs near the "Retail Showroom" (This is an "Executive Permission" Door"). To the right of the lower landing is a workbench with this collectible on top.`,
  },
  "Collect_SharpayPlushie.Collect_SharpayPlushie": {
    id: "Collect_SharpayPlushie.Collect_SharpayPlushie",
    type: "Collectables",
    name: "Sharpy Plushie",
    explanation: `Located in "Main Hallway" between "Theater" entrance and hallway leading to "Security Office" this requires "Security Permission".

- How to access location: Head to the "Main Hallway" from the hallway that connects to the "Security Office", the door where you entered after first encounter with the Mimic and evaded.

*Note: Mailbox to the left of the prize and a "Creator Permission" Door to the right of the prize. Behind the "Creator Permission" door is the "Ranger Army Knife" Collectable.

*Note: In the "Moon.exe" program this collectable is in the bedroom in the toy chest. Once you take the item a key will be found and used to open the bedroom's window. If you do not have the "Hedgehog Mask" collectable and leave the Moon will catch you.`,
  },
  "Collect_HedgehogMask.Collect_HedgehogMask": {
    id: "Collect_HedgehogMask.Collect_HedgehogMask",
    type: "Collectables",
    name: "Hedgehog Mask",
    explanation: `Located in the hallway near "Manager's Office" and requires "Security Permission".

- How to access location: If coming from the elevator head straight towards the "Manager's Office" which requires the Crank from Jackie's Box to lift gate. Once the office is in front, go left following the hallway. Use the "Security Permission" door to locate this collectable on a table.

*Note: Inside the same room is "Repair Permission" Upgrade.

*Note*: In the "Moon.exe" program this collectible once worn allows you to leave the bedroom area and enter the outside area via the window without the Moon catching you.*`,
  },
  "Collect_WaterGame.Collect_WaterGame": {
    id: "Collect_WaterGame.Collect_WaterGame",
    type: "Collectables",
    name: "Monty's Water Game",
    explanation: `located in "Welcome Show" and requires the "Repair Permission".

How to access location: 1st floor right side of performance, before the lift go left and follow catwalk to find this collectable on top of a stool.`,
  },
  "Collect_ChicaCup.Collect_ChicaCup": {
    id: "Collect_ChicaCup.Collect_ChicaCup",
    type: "Collectables",
    name: "Party Time Chica Vacuum Cup",
    explanation: `Located between "Showrooms" and Broken Elevator Cassette Area, need "Security Permission".

- How to access location: 1st floor of factory head towards "Showrooms", this is not the actual "Showroom" but area where you found the "Broken Cassette" (code: 0158, I forget how you get code best guess is monitors). In the area with Mrs. Helpful, insert tape to complete a mini game for fixing the elevator. Once fixed, locate the crawl passage along the wall directly behind you in that room (to the right of Mrs. Helpful). Make sure to have a fixed elevator or you can not crawl the gap. Follow until you drop into the gated room where you obtain a present and hand crank to unlock the room to exit.

*Note: In the "Moon.exe" program, this collectible can be found outside the bedroom window in the tree. You will need the Ranger Army Knife collectable to obtain this item. Once you retrieve the item it can be used to contain the soup to throw on the gator attacking the baby owl.`,
  },
  "Collect_PrizeWheel_GrandPrize.Collect_PrizeWheel_GrandPrize": {
    id: "Collect_PrizeWheel_GrandPrize.Collect_PrizeWheel_GrandPrize",
    type: "Collectables",
    name: "Grand Prize Trophy",
    explanation: `Located behind the main "Showroom" on the 2nd floor of Maestro-man's showroom and no required permissions.

- How to access location: Go to the main "Showroom" and head up to Maestro-man's Showroom. Pull down the lever and complete the Power Generation Puzzle. Tag the ticket from Mr. Helpful and give it to Maestro-man. Complete all three mini-games while avoiding being caught by Maestro-man's light/detection which can be quickly alerted if you walk or crouch to near to the mannequins. After each mini-game completion head to the area you entered/got a ticket from as you need to complete the Power Generation Puzzle each time. Once you defeat maestro-man for a third time and power is on, go use your earned spins behind Maestro-man until doors open. At the top of the stairs you notice Maestro-man gone and a present containing this collectible.

*Note: To the right of the "Trophy" collectable is a "Admin Permission" door and inside is the "Fredbear Pizza Maker" Collectable.

*Note: After solving the randomly generated hat/mannequin puzzle and inputting the code on the door to the left of the "Trophy" Collectable you will find the "Creator Permission" Upgrade Station.

*Note: PLEASE take one of the mini-games blasters and SAVE IT IN INVENTORY as this will help save backtracking for when you try to obtain the "Rainy Day Boot" collectable later from Warehouse/Loading Bay area.`,
  },
  "Collect_ArmyKnife.Collect_ArmyKnife": {
    id: "Collect_ArmyKnife.Collect_ArmyKnife",
    type: "Collectables",
    name: "Ranger Army Knife",
    explanation: `Located in "Main Hallway" and requires "Creator Permission".

- How to access location: From the "Security Office" head towards where you first encountered the Mimic and had to evade them. Entering from the "Security Office" doorway on the right, across the mailbox and "Sharpy Plushie" collectable locations, is a "Creator Permission" door. Inside is the Knife Collectable.

*Note: Inside the room is a hit to the "Main Hallway" coded door (code: 26294) where "Lil' Sewing Kit" Collectable is located.

*Note: In the "Moon.exe" program this knife is located outside the bedroom and after examining the Oak Tree you can take the knife. Once you have the knife you can use the knife to cut the branch of the Oak Tree outside of the bedroom window to obtain the Chica Party cup.`,
  },
  "Collect_Record.Collect_Record": {
    id: "Collect_Record.Collect_Record",
    type: "Collectables",
    name: "Fredbear Singing Record",
    explanation: `Located in 2nd floor of "Stage Controls" and requires "Security Permission".

- How to access location: Head to the workshop. You want to be in the area where the mimic first appears after you finish a power generator puzzle. If you are coming from the workshop entrance door, in the long split hallway and power generator puzzle is shelves you can crouch under that leads into a vent. This leads to the "Stage Controls" and you can watch the films you have collected on a projector. Just Past that room heading towards "Workshop" will be a "Security Permission" door where a mailbox and collectable await you near a blue Mycellium man lamp.

*Note*: In the same area you can listen to a wall cassette tape of Edwin.*`,
  },
  "Collect_SewingKit.Collect_SewingKit": {
    id: "Collect_SewingKit.Collect_SewingKit",
    type: "Collectables",
    name: "Lil Sewing Kit",
    explanation: `Located in "main Hallway" and requires "Creator Permission"

- How to access location: From the "Security Office" head towards where you first encountered the Mimic and had to evade them. Entering from the "Security Office" doorway and head to the right following a long hallway. There will be a coded door (code: 26294) where inside you will find a "Creator Permission" door which will unlock the area behind the gated cafeteria-looking area in the "Main Hallway".

*Note: Don't forget to use the crank to open the gate.

*Note: In the "Moon.exe" program this kit can be found in the dark forest area in the "examine loom" prompt. Take the sewing kit inside the old woman's cabin where you use it to repair the Bunny Mask.

*Note: In this gated area is a door that goes into a bathroom, this has an "Executive Permission" door where you can find a wall Cassette tape of Edwin".`,
  },
  "Collect_Hammer.Collect_Hammer": {
    id: "Collect_Hammer.Collect_Hammer",
    type: "Collectables",
    name: "Toy Hammer",
    explanation: `Located between "Workshop" and 1st Floor Exit of Stage that requires "Admin Permission".

- How to access location: Access "Stage Controls" and use dumbwaiter down (same one used to obtain Fall Fest Ticket Book Collectable or do Spring Lock Captain stage performance before Dolly Recycle section of game). Once on the bottom floor use the stage left where there is a "Admin Permission" door. Crouch through rumble and obtain collectible.

*Note: In the "Moon.exe" program this toy hammer is found in the cave after obtaining the Baby Owl mask and is located on the Moon's workbench. Once taken it will later be used to obtain Moon Statue's arm from crystal.`,
  },
  "Collect_Blocks.Collect_Blocks": {
    id: "Collect_Blocks.Collect_Blocks",
    type: "Collectables",
    name: "Blocks",
    explanation: `Located in the "Warehouse" and requires no additional permissions if you unlocked the area.

- How to access location: If starting from "Security Office" and have already defeated Maestro-man which unlocks this shortcut area, go right and use the "Creator Permission" door to enter "Warehouse". You can also enter "Warehouse" from the "Main Hallway" that also requires "Creator Permission". Once you power on the Trolly from finding the missing pieces and completing the Power Generation Puzzle then hitting the Trolly's Power Breaker Switch. Go inside the Trolly where you can crouch out the side to reach a skywalk/escape stairs. On top of the stairs is a Mr. Helpful Ball Toss mini-game. Like the Maestro-man Showroom Ball Toss mini-game there is a secret passage behind the game. Knock out the 1st Clown teeth wall and only clear out one side of the 2nd Clown Teeth Wall, NOT completing the game, to crouch through. At the end of the passage is the collectible.

*Note: In the "Moon.exe" program, this item is used to put in the David's Storytime box.`,
  },
  "Collect_DoctorKit.Collect_DoctorKit": {
    id: "Collect_DoctorKit.Collect_DoctorKit",
    type: "Collectables",
    name: "Junior Doctor's Kit",
    explanation: `located in "Loading Bay" and requires "Admin Permission".

- How to access location: Enter the "Warehouse" location where Mimic is wandering around in the Chica's Party World Mascot. Complete areas Power Generator Puzzle and unlock gates that block off the "Loading Bay". Complete the Tetras puzzle and obtain.

*Note*: A Murphy Commercial tape is in this room along the left stairs shared by the 2nd Crane Control Terminal (POV 2nd Crane Control Terminal is in front of you).*`,
  },
  "Collect_ToyPhone.Collect_ToyPhone": {
    id: "Collect_ToyPhone.Collect_ToyPhone",
    type: "Collectables",
    name: "Toy Phone",
    explanation: `Located between the main "Showroom" and entrance hallway of Jackie's Birthday Showroom with required "Creator Permission".

- How to access location: Head to the main "Showroom" and use the "Repair Permission" to access the entrance hallway of Jackie's Birthday Showroom. To the right of the Mrs. Helpful Birthday cake and to the left of the coded door (code: 4782) is a "Creator Permission" door. Inside is a Patpat and this collectible will be on a stool.`,
  },
  "Collect_VacuumPet.Collect_VacuumPet": {
    id: "Collect_VacuumPet.Collect_VacuumPet",
    type: "Collectables",
    name: "Vacuum Pet",
    explanation: `Located "Murray's Mansion" and requires "Parachute.exe" ending route.

- How to access location: Overall, the only way to enter the "Murray Mansion" is to pursue an ending where Dispatch is not given the Data Diver Permission Dock. You can not get this item with "Moon.exe" ending as there are no "H.E.L.P.E.R Terminals" in the Mansion that offer access. While in the Mansion head to the second floor, once up there go left down the hallway. Make sure to watch for the hanging chains! The last room on the left of the hallway will have the collectable.

*Note: This item can only be obtained during ending 2, running "Parachute.exe" and not giving Dispatch the Data Diver. You will have to already have the "Glitched Permission" to pursue ending 3.`,
  },
  "Turn_Crank_Storage.Turn_Crank_Storage": {
    id: "Turn_Crank_Storage.Turn_Crank_Storage",
    type: "Items",
  },
  "Collect_WhiteTiger.Collect_WhiteTiger": {
    id: "Collect_WhiteTiger.Collect_WhiteTiger",
    type: "Collectables",
    name: "Tiger Plush",
    explanation: `Located in "New Game+" in the "Security Office" and no required upgrade permission.

- How to obtain: Just complete the game once and start "New Game+" in the same profile.

*Note: If you got ending 1, giving Dispatch the Data Diver, you can just hit "continue" resuming with all access to pursue endings 2 or now complete ending 3 with now 25/25 to run "Moon.exe" on terminal. 

*Note*: All other endings (2 and 3) only offer "New Game+", but either way the item is found in "Security Office".*`,
  },
  "ProjectorRoom_FilmReel_A.ProjectorRoom_FilmReel_A": {
    id: "ProjectorRoom_FilmReel_A.ProjectorRoom_FilmReel_A",
    type: "Items",
  },
  "Collect_SnowGlobe.Collect_SnowGlobe": {
    id: "Collect_SnowGlobe.Collect_SnowGlobe",
    type: "Collectables",
    name: "Fall Fest Snow Globe",
    explanation: `Located in Jackie's showroom and no access required.

- How to access location: In Jackie's Showroom, where you first encounter her and take her crank, there is a long stage cutout decorating a castle. To the left of her box you will see two knights and a little arch way to crouch through. Crouch and you will obtain the collectable inside.

*Note: Inside this showroom has a blocked door which can be later accessed to create a shortcut from the showroom (code: 4782).

*Note: After Jackie rips herself from her box in this room a new crouch vent passage is revealed where you can obtain the "Swing Bee Honey Bottle" collectible #7, behind a coded door (code: 0434).`,
  },
  "Collect_HoneyBottle.Collect_HoneyBottle": {
    id: "Collect_HoneyBottle.Collect_HoneyBottle",
    type: "Collectables",
    name: "Swing Bee Honey Bottle",
    explanation: `Located attached to the main "Showroom" in a room later unlocked behind Jackie's Birthday Showroom which requires "Repair Permission".

- How to access location: Head to the "Showroom" where there is Mr. Helpful and the Three Showrooms of Story Teller Showroom, Maestro-man's Showroom and Jackie's Birthday Showroom. Go through Jackie's Birthday Showroom which requires "Repair Permission". Inside enter the code: 4782 (code is obtained from Main Showrooms camera monitors). Once inside Jackie's Showroom where you first meet Jackie and take her box's crank there is a vent. Crawl through the vent and notice a locked gate. Head Right and flip the power breaker switch to open the gate. Avoid the Mimic (Easy to hit the cut out button next to switch and hide in the locker where you wait till Mimic passes and crouch walk around the gate and can walk to the end of the hallway. Ignore the crawl area on the left and continue till you come across a coded door. Enter code: 0434 to unlock the secret room (code is obtained from the big Green blocks you see as you enter Jackie's Showroom on your way in).

*Note: Don't forget to flip the breakers to the right as you face exiting the room, there are two. I forget what they do but help unlock the area.

*Note: In the "Moon.exe" program this item is found near the submit entrance on the stump. Use this to lure the bear off the summit cabin's porch to allow entry,`,
  },
  "Collect_NightLight.Collect_NightLight": {
    id: "Collect_NightLight.Collect_NightLight",
    type: "Collectables",
    name: "Star Orphan Night Light",
    explanation: `Located in the Story Teller Showroom attached to the main "Showroom" and requires "Repair Permission".

- How to access location: This location is not unlocked in the main "Showroom" but through Maestro-man's room and behind the "Ball toss" mini-game. Make sure to NOT complete the mini-game. Only complete the first clown teeth wall then only complete part of the second clown teeth wall to create a crouch passage behind the mini-game to push a hidden button. Inside the door head left where you find a "Repair Permission" door. Once inside, evade the mimic while you turn on 1st floor generator, 2nd floor breaker, then access a now unblocked passage to a "Repair Permission" door. Here you will gain access to the Storyteller showroom. Push the button to raise the moons/clouds on the left side and use the dumbwaiter to listen to a recording of Edwin and access a terminal to "Start Night Light Show" on the 1st floor (Opens blocked gate). Evade the Mimic but make sure to push the red button before entering the unlocked gate, this raises the stage stairs. Once through the gate go right and use the "Repair Permissions" door to enter a breakroom. Go through the breakroom and the stars will have been raised to crouch under if you pushed its red button. There you will find the collectable.

*Note: Left side of the unlocked gate is a "Creator Permission" door behind it is the "Foxy Pirate Plush" collectable (#22 in this list).`,
  },
  "Collect_PizzaMaker.Collect_PizzaMaker": {
    id: "Collect_PizzaMaker.Collect_PizzaMaker",
    type: "Collectables",
    name: "Fredbear Pizza Maker",
    explanation: `Located behind the main "Showroom" on the 2nd floor of Maestro-man's showroom and requires "Creator Permission".

- How to access location: This will be a retrace step after obtaining "Creator Permission". Head to the main "Showroom" and go to Maestro-man's Showroom. Maestro-man will still be gone after concluding the rooftop boss fight. Head towards the Spin Wheel and up the stairs to the balcony where you found the "Trophy" Collectable the first time. Turn right and use the "Creator Permission" door where you find the collectable.

*Note: Honestly if you upgrade and remember this door exists before going to the rooftop to start Maestro-man boss fight, just backtrack to room then deposit collectable in the inventory machine.

*Note: If you didn't already, while here PLEASE take one of the mini-games blasters and SAVE IT IN INVENTORY as this will help save backtracking for when you try to obtain the "Rainy Day Boot" collectable later from Warehouse/Loading Bay area.`,
  },
  "ProjectorRoom_FilmReel_F.ProjectorRoom_FilmReel_F": {
    id: "ProjectorRoom_FilmReel_F.ProjectorRoom_FilmReel_F",
    type: "Items",
  },
  "ProjectorRoom_FilmReel_D.ProjectorRoom_FilmReel_D": {
    id: "ProjectorRoom_FilmReel_D.ProjectorRoom_FilmReel_D",
    type: "Items",
  },
  "Collect_TicketBook.Collect_TicketBook": {
    id: "Collect_TicketBook.Collect_TicketBook",
    type: "Collectables",
    name: "Fall Fest Ticket Book",
    explanation: `Located outside of "Stage Controls" and requires the Springlock or "Admin Permission".

- How to access location: Either complete the springlock assembly section or retrace steps with the "Admin Permission". Make sure to leave the dumbwaiter down to allow you to navigate to  crane operation controls located near the cranks (stage right, when you look at the stage below the catwalk/crane puzzle area)

*Note: This Puzzle is tricky to get the ticket book, so easier to leave stage right dumbwaiter down (below this puzzle is a stage, facing audience is front orientation, making dumbwaiter used to get to crane puzzle first is stage right, once you cross the first time that second crane operator is located stage right.. hope that helps), finish the stories springlock theater mini-game shooting, dolly recycling area, get admin permission and come in through the "Stage Controls" on 2nd floor.

*Note: In the "Moon.exe" this item is used later after you put the moon statue together and give a ticket to Maestro-man.`,
  },
  "Collect_FoxyPuppet.Collect_FoxyPuppet": {
    id: "Collect_FoxyPuppet.Collect_FoxyPuppet",
    type: "Collectables",
    name: "Foxy Pirate Plush",
    explanation: `Located in Story Teller Showroom adjacent to the main "Showroom" this requires "Creator Permission".

- How to access location: This location is not unlocked in the main "Showroom" but through Maestro-man's room and behind the "Ball toss" mini-game. Make sure to NOT complete the mini-game. Only complete the first clown teeth wall then only complete part of the second clown teeth wall to create a crouch passage behind the mini-game to push a hidden button. Inside the door head left where you find a "Repair Permission" door. Once inside, evade the mimic while you turn on the 1st floor generator, 2nd floor breaker, then access a now unblocked passage to a "Repair Permission" door. Here you will gain access to the Storyteller showroom. Push the button to raise the moons/clouds on the left side and use the dumbwaiter to listen to a recording of Edwin and access a terminal to "Start Night Light Show" on the 1st floor (Opens blocked gate). Once you go through the now unlocked gate follow the left path to reach the "Creator Permission" door where inside is the collectable.

*Note: In the Story Teller Showroom there are two collectables, the other collectable is the "Star Orphan Nightlight" (#8 in this list).`,
  },
  "ProjectorRoom_FilmReel_C.ProjectorRoom_FilmReel_C": {
    id: "ProjectorRoom_FilmReel_C.ProjectorRoom_FilmReel_C",
    type: "Items",
  },
  "Collect_BirthdayCake.Collect_BirthdayCake": {
    id: "Collect_BirthdayCake.Collect_BirthdayCake",
    type: "Collectables",
    name: "Birthday Cake",
    explanation: `Located in "Admin Wing" and requires "Admin Permission".

- How to access location: In the same hallway that connects "Loading Bay" to "Admin Wing" follow right side door from "Loading Bay" to labeled "Admin Wing". Here you will be hunted down by the Mimic in a Chica Mascot but be aware of the cupcakes. They are very sensitive and you need to crouch and move as far from them as possible. When you enter the main room head right. There's a break area marked by a coded door (code: 01350, obtained by numerous mailbox messages that change combo til you get the latest date), and 2 mailboxes. Once inside, the collectible is on the table.

*Note: This area is VERY buggy and sensitive, if you get this right on the first go I am jealous. The nearest Inventory Machine locked by an "Admin Permission" door... passed quite a few cupcakes with limited spacing between them. Best of Luck..

*Note: In the "Moon.exe" program, you give the cupcake back to Chica and can progress.

*Note: Once you get past the Hallway connecting the "Admin Permission" safe inventory machine space leading to the second section of "Admin Wing". You can book it up the stairs but note there are a few mailboxes to collect. Once you head up the stairs, metal doors close and you complete the area being able to get "Executive Permission" Upgrade.`,
  },
  "Collect_FIshingNet.Collect_FishingNet": {
    id: "Collect_FIshingNet.Collect_FishingNet",
    type: "Collectables",
    name: "Pet Fish Net",
    explanation: `located in "Upper Welcome Show" and need "Admin Permission".

- How to access location: Original access is locked in "Showroom" until you do the following. Enter the "Warehouse" location where Mimic was wandering around in Chica Mascot. Complete areas Power Generator Puzzle and unlock gates that block off the "Loading Bay". Complete the Tetras puzzle the first time to cross the room vertically and for a second time to cross the room horizontally, along the shared wall of the 2nd Crane Control Terminal head up the stairs to the right. Once in the hallway turn left to walk the long hallway, there should be a mailbox to mark where some stairs start. On the top of those stairs there are two doors.

*Note: Best to do this AFTER getting Nurse's Kit and BEFORE you do Executive as this is in the hallway outside of the "Loading Bay". Getting this here saves a lot of time.

*Note*: unlock the first door to  "Showroom" making a short cut to connect "Showroom" and Hallway. This was previously locked by "Employees Only" door.*

*Note: access the second door on the left to enter "Upper Welcome Show". Here is above the welcome show you first enter and are on the skywalk above, collectable located on the right side railing.`,
  },
  "Collect_Boot.Collect_Boot": {
    id: "Collect_Boot.Collect_Boot",
    type: "Collectables",
    name: "Rainy Day Boot",
    explanation: `Located between "Loading Bay" and "Admin Wing" requiring "Admin Permission".

- How to access location: This can be easily obtained after accessing the hallway sandwiched between "Loading Bay", "Admin Wing" and "Warehouse". If you do not want to suffer through the "Loading Bay" and its tetras puzzle and you have already unlocked the shortcut between the main "Showroom" and this area go to the "Showroom" taking the elevator. Once in the hallway head towards the "Admin Wing". Once in the doors take the dumbwaiter down, on the left is an Inventory Machine. Make sure to Withdraw a blaster taken from the Main "Showroom" in one of the blaster Maestro-man's mini-games. If you don't have it.. go get one and come back. Once you have it on hand or withdrawn head through the metal doors to the right of the inventory machine. To the left of the Vacuum bot is the mini-game Clown boards. If the Clown boards are on your right then the Roxy blaster mini-game is on the left. Complete and get the boots.

*Note: In the "Moon.exe" program, these boots will trap and suck Jackie into them allowing you access to the elevator.

*Note: Remember to go right of the Vacuum bot to find a mailbox but also to open a shortcut between this area and the "Warehouse".

*Note: There's a tape in the middle of this room along the back wall.`,
  },
  "Collect_Ball.Collect_Ball": {
    id: "Collect_Ball.Collect_Ball",
    type: "Collectables",
    name: "David's Toy Ball",
    explanation: `Located in "Retail Showroom" and requires "Executive Permission".

- How to access location: With the "Executive Permission" head to the "Welcome show" area and go up the lefthand stairs on the left side of the 2nd floor. There should be an "Executive Permission" door. Head down the staircase and keep going straight. There is a coded door (code: 80625, this is from monitors). Take this Elevator Down where you will find a giant statue of a head and a power generator puzzle missing 4 pieces. Use the Provided Star nightlight to power each section at a time to open and track missing pieces locked behind a gate. Each gate will open if that section is lit up, beware as you are being hunted down by the Mimic in a Moon Costume. Once you finish getting all 4 pieces then solving the power generator puzzle a gate will open allowing you inside the head to collect the present. Make sure to store it in the inventory machine, but to do that you will need to retrieve the star nightlight one more time to power the gate sectioning off the inventory machine.

*Note*: In the "Moon.exe" program, this Ball is crucial to David's Birthday lore.*`,
  },
} as const;

export function getObtainedInventoryItems(rawInventoryItems: any) {
  const actualData = rawInventoryItems[0].structs;
  const obtainedItems: {
    id: InventoryItemId;
    amount: number;
    isItemNew: boolean;
  }[] = [];

  for (const item of actualData) {
    const name = item.CustomStruct.InventoryItem[0].value.split("/");
    const amount = item.CustomStruct.NumberOfItemCollected[0].value;
    const isItemNew = item.CustomStruct.bIsItemNew[0].value;

    obtainedItems.push({
      id: name[name.length - 1] as InventoryItemId,
      amount,
      isItemNew,
    });
  }

  return obtainedItems;
}
