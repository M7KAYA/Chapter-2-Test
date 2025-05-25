const allQuestions = [
  {
    question: "What is the definition of choking?",
    options: [
      "a) A slow-onset respiratory condition",
      "b) Acute upper airway obstruction",
      "c) A chronic lung disease",
      "d) A type of cardiac arrest"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a cause of choking?",
    options: [
      "a) Drinking water slowly",
      "b) A foreign object like food obstructing the airway",
      "c) Regular exercise",
      "d) Deep breathing"
    ],
    correctIndex: 1
  },
  {
    question: "What happens during complete airway obstruction?",
    options: [
      "a) The casualty can speak and cough",
      "b) The casualty cannot speak, breathe, or cough",
      "c) The casualty breathes normally",
      "d) The casualty's condition improves spontaneously"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is NOT a sign of choking?",
    options: [
      "a) Clutching the throat",
      "b) Blue discoloration of face and lips",
      "c) Speaking clearly without difficulty",
      "d) Making strange sounds or no sounds"
    ],
    correctIndex: 2
  },
  {
    question: "What is the first step in the Heimlich maneuver for a conscious patient?",
    options: [
      "a) Lay the person flat on their back",
      "b) Lean the person forward slightly and stand behind them",
      "c) Give mouth-to-mouth resuscitation",
      "d) Perform chest compressions"
    ],
    correctIndex: 1
  },
  {
    question: "Which diagnostic test involves inserting a flexible scope into the airway?",
    options: [
      "a) X-ray",
      "b) Bronchoscopy",
      "c) Complete blood count",
      "d) Electrocardiogram"
    ],
    correctIndex: 1
  },
  {
    question: "What maneuver is recommended for an unconscious patient with suspected neck injury?",
    options: [
      "a) Head-tilt-chin-lift",
      "b) Jaw-thrust",
      "c) Chest thrusts",
      "d) Abdominal thrusts"
    ],
    correctIndex: 1
  },
  {
    question: "What does an oropharyngeal airway prevent?",
    options: [
      "a) Cardiac arrest",
      "b) Tongue from obstructing the pharynx",
      "c) Broken ribs",
      "d) Vomiting"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is an indication for endotracheal intubation?",
    options: [
      "a) Mild cough",
      "b) Bypassing upper airway obstruction",
      "c) Treating a nosebleed",
      "d) Managing a sprained ankle"
    ],
    correctIndex: 1
  },
  {
    question: "What is the recommended position for performing head-tilt-chin-lift?",
    options: [
      "a) Prone position",
      "b) Supine on a firm, flat surface",
      "c) Sitting upright",
      "d) Side-lying position"
    ],
    correctIndex: 1
  },
  {
    question: "How long can permanent brain damage occur after complete airway obstruction?",
    options: [
      "a) 10-15 minutes",
      "b) 3-5 minutes",
      "c) 30-60 minutes",
      "d) 1-2 hours"
    ],
    correctIndex: 1
  },
  {
    question: "What should you do for partial airway obstruction if the casualty can cough?",
    options: [
      "a) Perform abdominal thrusts immediately",
      "b) Encourage them to cough up the object",
      "c) Lay them down flat",
      "d) Give them water to drink"
    ],
    correctIndex: 1
  },
  {
    question: "Choking can lead to permanent brain damage within 3-5 minutes if completely obstructed.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Partial airway obstruction means the casualty cannot cough at all.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "The Heimlich maneuver involves abdominal thrusts.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Blue discoloration of face and lips is a sign of adequate oxygenation.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Jaw-thrust maneuver is safer for patients with suspected neck injury.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "X-ray is the primary method for removing foreign bodies from airways.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Oropharyngeal airways can help with suctioning secretions.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Endotracheal intubation is indicated for patients who can breathe normally.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Head-tilt-chin-lift involves extending the neck.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Regurgitated stomach contents can cause airway obstruction.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "What is the medical definition of trauma?",
    options: [
      "a) An emotionally painful experience",
      "b) A serious or critical injury, wound, or shock",
      "c) A chronic illness",
      "d) A psychological disorder"
    ],
    correctIndex: 1
  },
  {
    question: "Which age group has the highest injury rate?",
    options: [
      "a) Children under 5",
      "b) Persons between 15 and 24 years",
      "c) Adults aged 40-50",
      "d) Elderly over 75"
    ],
    correctIndex: 1
  },
  {
    question: "What is a significant contributing factor to many types of injuries, including motor vehicle crashes?",
    options: [
      "a) Exercise",
      "b) Alcohol",
      "c) Healthy diet",
      "d) Sleep"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is NOT a mechanism of injury?",
    options: [
      "a) Mechanical (kinetic)",
      "b) Thermal",
      "c) Radiant",
      "d) Emotional"
    ],
    correctIndex: 3
  },
  {
    question: "What is the leading cause of death in high cervical cord injury?",
    options: [
      "a) Hemorrhage",
      "b) Acute respiratory failure",
      "c) Infection",
      "d) Cardiac arrest"
    ],
    correctIndex: 1
  },
  {
    question: "Which diagnostic method is commonly used for spinal injuries?",
    options: [
      "a) Blood test",
      "b) X-ray examinations",
      "c) Urinalysis",
      "d) Echocardiogram"
    ],
    correctIndex: 1
  },
  {
    question: "What is a common sign of head injury?",
    options: [
      "a) Increased appetite",
      "b) Projectile vomiting",
      "c) Weight gain",
      "d) Improved vision"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a symptom of chest injury?",
    options: [
      "a) Improved breathing",
      "b) Sucking sound heard with respirations",
      "c) Increased blood pressure",
      "d) Rapid healing"
    ],
    correctIndex: 1
  },
  {
    question: "What is the first step in managing a patient with a head injury?",
    options: [
      "a) Administering sedatives",
      "b) Maintaining a patent airway",
      "c) Inducing vomiting",
      "d) Ignoring the injury"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a late complication of injuries?",
    options: [
      "a) Immediate death",
      "b) Infection",
      "c) Improved organ function",
      "d) Rapid recovery"
    ],
    correctIndex: 1
  },
  {
    question: "Trauma can refer to both physical injuries and emotional distress.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Females have a higher mortality rate from injuries than males.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Alcohol is a significant contributing factor in motor vehicle crashes.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Immediate deaths from trauma occur days to weeks after the injury.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Head injuries can cause leakage of cerebrospinal fluid.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Blunt trauma occurs when a foreign body passes through body tissues.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Early deaths from trauma require immediate resuscitation.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Thermal energy as a mechanism of injury includes animal toxins.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Infection is a cause of late deaths from trauma.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Pelvic injuries are commonly caused by motor vehicle accidents.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "What is the primary function of the circulatory system?",
    choices: [
      "To drive blood through the cardiovascular system, delivering oxygenated blood to tissues and deoxygenated blood to the lungs.",
      "To produce hormones for metabolic regulation.",
      "To filter toxins from the blood.",
      "To store nutrients for future use."
    ],
    correctIndex: 0
  },
  {
    question: "Which of the following is a characteristic feature of neurogenic shock?",
    choices: [
      "Tachycardia and cool, clammy skin.",
      "Bradycardia and dry, warm skin.",
      "Hypertension and flushed skin.",
      "Rapid, shallow respirations."
    ],
    correctIndex: 1
  },
  {
    question: "What is the most common type of shock?",
    choices: [
      "Cardiogenic shock.",
      "Septic shock.",
      "Hypovolemic shock.",
      "Neurogenic shock."
    ],
    correctIndex: 2
  },
  {
    question: "Which electrolyte imbalance can contribute to shock?",
    choices: [
      "Hyperglycemia.",
      "Hypokalcemia.",
      "Hypernatremia.",
      "All of the above."
    ],
    correctIndex: 3
  },
  {
    question: "What is the first-line treatment for all types of shock?",
    choices: [
      "Administering vasopressors.",
      "Fluid resuscitation via IV.",
      "Performing surgery.",
      "Providing oxygen therapy."
    ],
    correctIndex: 0
  },
  {
    question: "Which of the following is a risk factor for septic shock?",
    choices: [
      "Immunosuppression.",
      "Latex sensitivity.",
      "Spinal cord injury.",
      "Dehydration."
    ],
    correctIndex: 0
  },
  {
    question: "In which stage of shock do compensatory mechanisms become ineffective?",
    choices: [
      "Compensatory shock.",
      "Progressive shock.",
      "Irreversible shock.",
      "Initial shock."
    ],
    correctIndex: 1
  },
  {
    question: "What is a key sign of hypovolemic shock?",
    choices: [
      "Hypertension.",
      "Bradycardia.",
      "Low blood pressure and rapid heart rate.",
      "Warm, dry skin."
    ],
    correctIndex: 2
  },
  {
    question: "Which medication is used to improve cardiac output in shock?",
    choices: [
      "Nitroglycerin.",
      "Dobutamine.",
      "Insulin.",
      "Acetaminophen."
    ],
    correctIndex: 1
  },
  {
    question: "What is the normal range for central venous pressure (CVP)?",
    choices: [
      "1–3 cm of water.",
      "5–10 cm of water.",
      "12–15 cm of water.",
      "20–25 cm of water."
    ],
    correctIndex: 1
  },
  {
    question: "Which type of shock is caused by severe allergic reactions?",
    choices: [
      "Cardiogenic shock.",
      "Anaphylactic shock.",
      "Neurogenic shock.",
      "Septic shock."
    ],
    correctIndex: 1
  },
  {
    question: "What is a common cause of cardiogenic shock?",
    choices: [
      "Severe dehydration.",
      "Myocardial infarction.",
      "Spinal anesthesia.",
      "Burns."
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a warning sign of shock?",
    choices: [
      "Increased urine output.",
      "Hypertension.",
      "Cool, clammy skin.",
      "Slow, deep respirations."
    ],
    correctIndex: 2
  },
  {
    question: "What is the primary goal of nursing interventions in hypovolemic shock?",
    choices: [
      "Administering bronchodilators.",
      "Preventing further fluid loss.",
      "Elevating the head to 90 degrees.",
      "Restricting oxygen therapy."
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a vasopressor agent used in shock treatment?",
    choices: [
      "Nitroglycerin.",
      "Norepinephrine.",
      "Furosemide.",
      "Albuterol."
    ],
    correctIndex: 1
  },
  {
    question: "What is the correct positioning for a patient in shock without spinal injury?",
    choices: [
      "High Fowler’s position.",
      "Supine with legs elevated.",
      "Side-lying position.",
      "Prone position."
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a cause of distributive shock?",
    choices: [
      "Hemorrhage.",
      "Widespread vasodilation.",
      "Heart failure.",
      "Dehydration."
    ],
    correctIndex: 1
  },
  {
    question: "What is a clinical feature of irreversible shock?",
    choices: [
      "Normal blood pressure.",
      "Increased urinary output.",
      "Multiple organ failure.",
      "Warm, dry skin."
    ],
    correctIndex: 2
  },
  {
    question: "Which of the following is a risk factor for anaphylactic shock?",
    choices: [
      "Chronic illness.",
      "Penicillin sensitivity.",
      "Malnourishment.",
      "Extremes of age."
    ],
    correctIndex: 1
  },
  {
    question: "What is the role of histamine in anaphylactic shock?",
    choices: [
      "It increases cardiac output.",
      "It causes vasodilation and a drop in blood pressure.",
      "It stimulates the sympathetic nervous system.",
      "It reduces inflammation."
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a sign of cardiogenic shock?",
    choices: [
      "Hypertension.",
      "Bradycardia.",
      "Sudden, rapid heartbeat (tachycardia).",
      "Increased urine output."
    ],
    correctIndex: 2
  },
  {
    question: "What is the primary cause of septic shock?",
    choices: [
      "Severe allergic reaction.",
      "Bacterial toxins causing vasodilation.",
      "Spinal cord injury.",
      "Excessive fluid loss."
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a nursing diagnosis for shock?",
    choices: [
      "Increased cardiac output.",
      "Fluid volume excess.",
      "Impaired gas exchange.",
      "Hyperactive bowel sounds."
    ],
    correctIndex: 2
  },
  {
    question: "What is the purpose of Trendelenburg positioning in shock management?",
    choices: [
      "To reduce blood flow to vital organs.",
      "To increase blood flow to vital organs.",
      "To restrict breathing.",
      "To induce vomiting."
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a characteristic of compensatory shock?",
    choices: [
      "Blood pressure is unresponsive to treatment.",
      "Compensatory mechanisms maintain vital functions.",
      "Multiple organ failure occurs.",
      "Bradycardia is present."
    ],
    correctIndex: 1
  },
  {
    question: "Shock is a life-threatening condition that affects all body systems.",
    choices: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Hypovolemic shock is caused by excessive fluid intake.",
    choices: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Neurogenic shock is characterized by tachycardia.",
    choices: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Septic shock is the most common type of circulatory shock.",
    choices: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "In irreversible shock, multiple organ failure occurs.",
    choices: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Low blood pressure and rapid heart rate are key signs of shock.",
    choices: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Anaphylactic shock is caused by bacterial toxins.",
    choices: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Cardiogenic shock can result from myocardial infarction.",
    choices: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "The normal cardiac index is 2.5 to 3.5 l/min/m².",
    choices: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Vasopressor agents reduce blood pressure in shock.",
    choices: ["True", "False"],
    correctIndex: 1
  },
{
    question: "What is the definition of bleeding?",
    options: [
      "The flow of blood outside blood vessels.",
      "The clotting of blood inside blood vessels.",
      "The blockage of blood flow to tissues.",
      "The rupture of capillaries only."
    ],
    correctIndex: 0 // كان "The flow of blood outside blood vessels."
  },
  {
    question: "Which type of bleeding is characterized by bright red blood that spurts in time with the heartbeat?",
    options: [
      "Venous bleeding.",
      "Arterial bleeding.",
      "Capillary bleeding.",
      "Internal bleeding."
    ],
    correctIndex: 1 // كان "Arterial bleeding."
  },
  {
    question: "What is a common sign of internal bleeding?",
    options: [
      "Warm, flushed skin.",
      "Hemoptysis (coughing up blood).",
      "Slow, strong pulse.",
      "Increased blood pressure."
    ],
    correctIndex: 1 // كان "Hemoptysis (coughing up blood)."
  },
  {
    question: "Which of the following is a risk of venous bleeding?",
    options: [
      "Air embolus from air entering a damaged vein.",
      "Rapid clotting without intervention.",
      "Bright red blood flow.",
      "High oxygen content in the blood."
    ],
    correctIndex: 0 // كان "Air embolus from air entering a damaged vein."
  },
  {
    question: "What is the first step in controlling external bleeding?",
    options: [
      "Elevating the wound above heart level.",
      "Applying direct pressure with a clean dressing.",
      "Using a tourniquet immediately.",
      "Applying ice to the wound."
    ],
    correctIndex: 0 // كان "Elevating the wound above heart level."
  },
  {
    question: "Where should pressure be applied to control bleeding from the arm?",
    options: [
      "Femoral artery.",
      "Brachial artery.",
      "Carotid artery.",
      "Radial artery."
    ],
    correctIndex: 1 // كان "Brachial artery."
  },
  {
    question: "What is a key symptom of capillary bleeding?",
    options: [
      "Spurting blood.",
      "Dark red, steady flow.",
      "Medium red, slow oozing.",
      "No visible bleeding."
    ],
    correctIndex: 2 // كان "Medium red, slow oozing."
  },
  {
    question: "When should a tourniquet be used?",
    options: [
      "For any minor cut.",
      "Only when direct pressure and elevation fail to stop life-threatening bleeding.",
      "For all cases of venous bleeding.",
      "As the first-line treatment for nosebleeds."
    ],
    correctIndex: 1 // كان "Only when direct pressure and elevation fail to stop life-threatening bleeding."
  },
  {
    question: "What is the correct position for a nosebleed casualty?",
    options: [
      "Head tilted back.",
      "Head forward, pinching the soft part of the nose.",
      "Lying flat with legs elevated.",
      "Standing upright."
    ],
    correctIndex: 1 // كان "Head forward, pinching the soft part of the nose."
  },
  {
    question: "Which artery is compressed to control bleeding from the lower limb?",
    options: [
      "Subclavian artery.",
      "Femoral artery.",
      "Radial artery.",
      "Temporal artery."
    ],
    correctIndex: 1 // كان "Femoral artery."
  },
  {
    question: "What is not a sign of abdominal bleeding?",
    options: [
      "Visible intestines protruding.",
      "Vomiting.",
      "Warm, dry skin.",
      "Symptoms of shock."
    ],
    correctIndex: 2 // كان "Warm, dry skin."
  },
  {
    question: "How should a scalp wound with a suspected fracture be treated?",
    options: [
      "Apply heavy direct pressure.",
      "Avoid heavy pressure, cover with dressing.",
      "Plug the wound tightly.",
      "Immerse in cold water."
    ],
    correctIndex: 1 // كان "Avoid heavy pressure, cover with dressing."
  },
  {
    question: "What is hematuria?",
    options: [
      "Blood in urine.",
      "Blood in stool.",
      "Vomiting blood.",
      "Coughing up blood."
    ],
    correctIndex: 0 // كان "Blood in urine."
  },
  {
    question: "Which of the following is not a pressure point?",
    options: [
      "Carotid artery.",
      "Femoral artery.",
      "Pulmonary artery.",
      "Brachial artery."
    ],
    correctIndex: 2 // كان "Pulmonary artery."
  },
  {
    question: "What should be avoided when treating mouth bleeding?",
    options: [
      "Applying direct pressure.",
      "Rinsing the mouth vigorously.",
      "Tilting the head forward.",
      "Using a clean dressing."
    ],
    correctIndex: 1 // كان "Rinsing the mouth vigorously."
  },
  {
    question: "What is the primary treatment for bruises?",
    options: [
      "Applying heat immediately.",
      "Elevating and cooling the injured area.",
      "Massaging the bruise.",
      "Applying tight bandages."
    ],
    correctIndex: 1 // كان "Elevating and cooling the injured area."
  },
  {
    question: "Which of the following is a sign of shock due to bleeding?",
    options: [
      "Slow, strong pulse.",
      "Warm, dry skin.",
      "Rapid, weak pulse.",
      "High blood pressure."
    ],
    correctIndex: 2 // كان "Rapid, weak pulse."
  },
  {
    question: "What is melena?",
    options: [
      "Blood in vomit.",
      "Blood in stool (black stool).",
      "Blood in urine.",
      "Blood in saliva."
    ],
    correctIndex: 1 // كان "Blood in stool (black stool)."
  },
  {
    question: "How should a casualty with abdominal bleeding be positioned?",
    options: [
      "Fully flat on the back.",
      "Half-sitting with knees bent.",
      "Standing upright.",
      "Lying on the stomach."
    ],
    correctIndex: 1 // كان "Half-sitting with knees bent."
  },
  {
    question: "What is a danger of applying pressure to both carotid arteries simultaneously?",
    options: [
      "Increased blood flow to the brain.",
      "Cutting off blood supply to the brain.",
      "Causing a nosebleed.",
      "Reducing heart rate."
    ],
    correctIndex: 1 // كان "Cutting off blood supply to the brain."
  },
  {
    question: "What is the least common type of external bleeding?",
    options: [
      "Capillary bleeding.",
      "Venous bleeding.",
      "Arterial bleeding.",
      "Internal bleeding."
    ],
    correctIndex: 2 // كان "Arterial bleeding."
  },
  {
    question: "What should not be done when treating a protruding intestine?",
    options: [
      "Covering with a damp sterile dressing.",
      "Pushing the intestine back inside.",
      "Applying gentle pressure around the wound.",
      "Keeping the casualty in a half-sitting position."
    ],
    correctIndex: 1 // كان "Pushing the intestine back inside."
  },
  {
    question: "Direct pressure is the main treatment for controlling bleeding.",
    options: ["True", "False"],
    correctIndex: 0 // كان "True"
  },
  {
    question: "Arterial bleeding is dark red and flows steadily.",
    options: ["True", "False"],
    correctIndex: 1 // كان "False"
  },
  {
    question: "A tourniquet should be the first method used for all severe bleeding.",
    options: ["True", "False"],
    correctIndex: 1 // كان "False"
  },
  {
    question: "Elevating a bleeding wound can help slow blood flow.",
    options: ["True", "False"],
    correctIndex: 0 // كان "True"
  },
  {
    question: "Internal bleeding is always visible externally.",
    options: ["True", "False"],
    correctIndex: 1 // كان "False"
  },
  {
    question: "Pressure points are used to compress veins, not arteries.",
    options: ["True", "False"],
    correctIndex: 1 // كان "False"
  },
  {
    question: "In nosebleeds, the casualty should tilt their head backward to stop bleeding.",
    options: ["True", "False"],
    correctIndex: 1 // كان "False"
  },
  {
    question: "What is the definition of a wound?",
    options: [
      "A break or disruption in the normal integrity of the skin and tissues",
      "A bacterial infection of the skin",
      "A chronic condition affecting internal organs",
      "A temporary discoloration of the skin"
    ],
    correctIndex: "0"
  },
  {
    question: "Which of the following is an example of an intentional wound?",
    options: ["Gunshot wound", "Surgical incision", "Burn", "Animal bite"],
    correctIndex: "1"
  },
  {
    question: "What characterizes unintentional wounds?",
    options: [
      "Clean edges and controlled bleeding",
      "Jagged edges and high risk of infection",
      "Sterile conditions and facilitated healing",
      "Minimal tissue damage"
    ],
    correctIndex: "1"
  },
  {
    question: "Which type of wound involves a clean separation of skin and tissue with smooth edges?",
    options: ["Laceration", "Avulsion", "Incision", "Puncture"],
    correctIndex: "2"
  },
  {
    question: "What is a common cause of abrasion wounds?",
    options: ["Animal bites", "Falls", "Gunshots", "Surgical procedures"],
    correctIndex: "1"
  },
  {
    question: "Which wound type involves the forcible separation or tearing of tissue from the body?",
    options: ["Incision", "Avulsion", "Puncture", "Contusion"],
    correctIndex: "1"
  },
  {
    question: "What is a key characteristic of puncture wounds?",
    options: [
      "Heavy external bleeding",
      "Minimal external bleeding but risk of internal damage",
      "Smooth, even edges",
      "Rapid healing"
    ],
    correctIndex: "1"
  },
  {
    question: "What is another name for a closed wound?",
    options: ["Incision", "Bruise or contusion", "Laceration", "Abrasion"],
    correctIndex: "1"
  },
  {
    question: "Which of the following is a sign of a closed wound with internal injury?",
    options: ["Smooth skin", "Cold, clammy, pale skin", "No pain", "Rapid healing"],
    correctIndex: "1"
  },
  {
    question: "What distinguishes acute wounds from chronic wounds?",
    options: [
      "Acute wounds heal without difficulty, while chronic wounds do not progress normally",
      "Acute wounds always involve infection",
      "Chronic wounds have clean edges",
      "Acute wounds are caused by blunt force"
    ],
    correctIndex: "0"
  },
  {
    question: "Which factor is a local factor affecting wound healing?",
    options: ["Age", "Infection", "Nutritional status", "Immunosuppression"],
    correctIndex: "1"
  },
  {
    question: "What is the most serious complication of dehiscence?",
    options: [
      "Infection",
      "Evaporation (complete separation with protrusion of viscera)",
      "Minor bleeding",
      "Scarring"
    ],
    correctIndex: "1"
  },
  {
    question: "What is the first step in controlling bleeding for first aid?",
    options: [
      "Elevate the wound",
      "Apply direct pressure",
      "Encourage the casualty to lie down and rest",
      "Use indirect pressure"
    ],
    correctIndex: "2"
  },
  {
    question: "When should indirect pressure be applied to control bleeding?",
    options: [
      "When direct pressure is not possible or ineffective",
      "As the first step in all cases",
      "Only for puncture wounds",
      "When the wound is infected"
    ],
    correctIndex: "0"
  },
  {
    question: "What is a sign of an infected wound?",
    options: [
      "Rapid healing",
      "Swelling, redness, and heat around the wound",
      "No pain",
      "Smooth edges"
    ],
    correctIndex: "1"
  },
  {
    question: "How can tetanus be prevented after an injury?",
    options: [
      "By applying ice",
      "By giving tetanus toxoids",
      "By scrubbing the wound vigorously",
      "By leaving the wound uncovered"
    ],
    correctIndex: "1"
  },
  {
    question: "What should you avoid when providing emergency care for minor wounds?",
    options: [
      "Washing hands",
      "Talking, coughing, or sneezing over the wound",
      "Using sterile bandages",
      "Cleaning the wound"
    ],
    correctIndex: "1"
  },
  {
    question: "What should you do if a foreign object is deeply embedded in a major wound?",
    options: [
      "Remove it immediately",
      "Apply pressure directly on the object",
      "Avoid removing it and seek medical help",
      "Ignore the object"
    ],
    correctIndex: "2"
  },
  {
    question: "What is the recommended action for a suspected closed fracture?",
    options: [
      "Move the victim immediately",
      "Immobilize the affected area before moving the victim",
      "Apply heat to the area",
      "Give fluids by mouth"
    ],
    correctIndex: "1"
  },
  {
    question: "What should you do for a victim suspected of internal injury?",
    options: [
      "Give fluids by mouth",
      "Transport them in a lying position and prevent shock",
      "Encourage them to walk",
      "Apply direct pressure to the abdomen"
    ],
    correctIndex: "1"
  },
  {
    question: "What is a characteristic of intentional wounds?",
    options: [
      "High risk of infection",
      "Clean edges and controlled bleeding",
      "Jagged edges",
      "Accidental causes"
    ],
    correctIndex: "1"
  },
  {
    question: "Which of the following is an example of a closed wound?",
    options: ["Surgical incision", "Gunshot wound", "Bruise or contusion", "Laceration"],
    correctIndex: "2"
  },
  {
    question: "Intentional wounds are created for therapeutic purposes.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Chronic wounds heal faster than acute wounds.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "Puncture wounds are more likely to become infected than some other wounds.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Elevating a wounded limb above the heart can help reduce bleeding.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Direct pressure should always be applied for longer than 10 minutes to stop bleeding.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "Tetanus can be prevented by immunization.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "For a suspected internal injury, fluids should be given by mouth to prevent thirst.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "What is the outermost layer of the skin?",
    options: ["Epidermis", "Dermis", "Subcutaneous tissue", "Hypodermis"],
    correctIndex: "0"
  },
  {
    question: "Which layer of the skin provides strength and structure?",
    options: ["Epidermis", "Dermis", "Subcutaneous tissue", "Keratinocytes"],
    correctIndex: "1"
  },
  {
    question: "What type of burn injury results from exposure to acids or alkalis?",
    options: ["Thermal", "Chemical", "Radiation", "Electric"],
    correctIndex: "1"
  },
  {
    question: "Which of the following is a characteristic of superficial (first-degree) burns?",
    options: [
      "Destruction of all epidermal and dermal layers",
      "Pain and itching due to sensory receptor stimulation",
      "Exposure of the fat layer",
      "Requires surgical intervention for healing"
    ],
    correctIndex: "1"
  },
  {
    question: "What determines the depth of a burn injury?",
    options: [
      "The color of the burned skin",
      "The temperature of the injuring agent, duration of exposure, and body area exposed",
      "The patient’s age and medical history",
      "The type of first aid applied"
    ],
    correctIndex: "1"
  },
  {
    question: "Which burn depth involves destruction of all epidermal and dermal elements?",
    options: [
      "Superficial",
      "Superficial partial-thickness",
      "Deep partial-thickness",
      "Full-thickness"
    ],
    correctIndex: "3"
  },
  {
    question: "According to the \"rule of nines,\" what percentage of TBSA is allocated to each arm?",
    options: ["9%", "18%", "1%", "36%"],
    correctIndex: "0"
  },
  {
    question: "Which body part accounts for 1% of TBSA in the \"rule of nines\"?",
    options: ["Head", "Perineum", "Anterior trunk", "Leg"],
    correctIndex: "1"
  },
  {
    question: "What is a common complication of deep partial-thickness and full-thickness burns?",
    options: [
      "Rapid healing",
      "Scarring and contractures",
      "Increased urine output",
      "Hypothermia"
    ],
    correctIndex: "1"
  },
  {
    question: "Which phase of burn care begins 48 to 72 hours after the injury?",
    options: ["Emergent", "Acute", "Rehabilitation", "Resuscitative"],
    correctIndex: "1"
  },
  {
    question: "What is the priority during the emergent phase of burn care?",
    options: [
      "Wound closure",
      "Fluid resuscitation",
      "Psychological counseling",
      "Occupational therapy"
    ],
    correctIndex: "1"
  },
  {
    question: "Which fluid is commonly used for initial resuscitation in burn patients?",
    options: [
      "5% dextrose in water",
      "Lactated Ringer’s solution",
      "Hypertonic saline",
      "Colloids only"
    ],
    correctIndex: "1"
  },
  {
    question: "What is the goal of hypertonic saline solution in burn management?",
    options: [
      "Increase urine output",
      "Reduce edema and prevent pulmonary complications",
      "Replace lost hemoglobin",
      "Provide nutritional support"
    ],
    correctIndex: "1"
  },
  {
    question: "Which of the following is a sign of inhalation injury?",
    options: [
      "Increased urine output",
      "Singed nostrils",
      "Hypothermia",
      "Bradycardia"
    ],
    correctIndex: "1"
  },
  {
    question: "What is the primary purpose of a nasogastric tube in major burn patients?",
    options: [
      "Administer medications",
      "Prevent nausea and vomiting",
      "Monitor core body temperature",
      "Provide nutritional support"
    ],
    correctIndex: "1"
  },
  {
    question: "Which electrolyte imbalance is common in the emergent phase due to cellular trauma?",
    options: [
      "Sodium excess",
      "Potassium excess",
      "Calcium deficit",
      "Phosphorus excess"
    ],
    correctIndex: "1"
  },
  {
    question: "What is a key nursing intervention to promote gas exchange in burn patients?",
    options: [
      "Restrict fluid intake",
      "Provide humidified oxygen",
      "Administer antacids",
      "Elevate burned extremities"
    ],
    correctIndex: "1"
  },
  {
    question: "Which complication is associated with circumferential burns on extremities?",
    options: [
      "Curling’s ulcer",
      "Compartment syndrome",
      "Paralytic ileus",
      "Acute renal failure"
    ],
    correctIndex: "1"
  },
  {
    question: "What is the purpose of escharotomy in burn management?",
    options: [
      "Reduce pain",
      "Restore blood flow to compromised tissues",
      "Prevent infection",
      "Promote wound healing"
    ],
    correctIndex: "1"
  },
  {
    question: "Which medication is commonly administered to prevent Curling’s ulcer?",
    options: ["Opioids", "Ranitidine (Zantac)", "Antibiotics", "Diuretics"],
    correctIndex: "1"
  },
  {
    question: "What is the focus of the rehabilitation phase in burn care?",
    options: [
      "Fluid resuscitation",
      "Physical and psychosocial recovery",
      "Wound debridement",
      "Pain management"
    ],
    correctIndex: "1"
  },
  {
    question: "Which of the following is a systemic factor affecting wound healing?",
    options: ["Pressure", "Nutritional status", "Trauma", "Necrosis"],
    correctIndex: "Nutritional status"
  },
  {
    question: "What is a characteristic of full-thickness burns?",
    options: [
      "Blanching under pressure",
      "Thrombosis of blood vessels",
      "Minimal scarring",
      "Rapid healing"
    ],
    correctIndex: "1"
  },
  {
    question: "Which method is used to estimate the extent of a burn?",
    options: [
      "Blood pressure monitoring",
      "\"Rule of nines\"",
      "Urine output measurement",
      "Core temperature assessment"
    ],
    correctIndex: "1"
  },
  {
    question: "What is the primary cause of death at the scene of a fire?",
    options: [
      "Hypothermia",
      "Carbon monoxide poisoning",
      "Electric shock",
      "Chemical exposure"
    ],
    correctIndex: "1"
  },
  {
    question: "The epidermis is the innermost layer of the skin.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "Superficial burns affect only the epidermal layer.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Chemical burns are caused by exposure to acids or alkalis.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Full-thickness burns heal without scarring.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "The \"rule of nines\" allocates 18% TBSA to each leg.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "The emergent phase of burn care focuses on wound closure.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "Lactated Ringer’s solution is commonly used for fluid resuscitation in burn patients.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Inhalation injury is characterized by singed nostrils and hoarseness.",
    options: ["True", "False"],
    correctIndex: "0"
  },
  {
    question: "Potassium levels decrease in the emergent phase due to cellular trauma.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "The rehabilitation phase begins immediately after the burn injury.",
    options: ["True", "False"],
    correctIndex: "1"
  },
  {
    question: "What is the definition of a poison?",
    options: [
      "Any substance that injures the body by its chemical action in relatively small amounts",
      "Only substances that are ingested",
      "Substances that are always fatal",
      "Only illegal drugs"
    ],
    correctIndex: 0
  },
  {
    question: "Which of the following is a common cause of poisoning?",
    options: [
      "Drinking water",
      "Household cleaning products",
      "Fresh fruits",
      "Exercise"
    ],
    correctIndex: 1
  },
  {
    question: "What is a primary goal of emergency treatment for poisoning?",
    options: [
      "To induce vomiting in all cases",
      "To remove or inactivate the poison before absorption",
      "To ignore the type of poison ingested",
      "To delay treatment until symptoms appear"
    ],
    correctIndex: 1
  },
  {
    question: "Which substance should NOT induce vomiting if ingested?",
    options: [
      "Water",
      "Lye or household cleaners",
      "Milk",
      "Activated charcoal"
    ],
    correctIndex: 1
  },
  {
    question: "What is the first step in managing a poisoned patient?",
    options: [
      "Administering an antidote",
      "Assessing airway, breathing, and circulation (ABCs)",
      "Inducing vomiting immediately",
      "Giving oral fluids"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a sign of carbon monoxide poisoning?",
    options: [
      "Increased appetite",
      "Appearing intoxicated (from cerebral hypoxia)",
      "High blood pressure",
      "Rapid healing"
    ],
    correctIndex: 1
  },
  {
    question: "What is the purpose of activated charcoal in poisoning cases?",
    options: [
      "To induce vomiting",
      "To neutralize the ingested substance and minimize toxicity",
      "To replace lost fluids",
      "To clean the skin"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is an example of an inhaled poison?",
    options: [
      "Spoiled food",
      "Carbon monoxide",
      "Prescription medication",
      "Mercury"
    ],
    correctIndex: 1
  },
  {
    question: "What should be done if a patient has ingested a corrosive poison?",
    options: [
      "Induce vomiting immediately",
      "Give water or milk for dilution (if no airway obstruction or burns)",
      "Ignore the situation",
      "Administer syrup of ipecac"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a symptom of poisoning?",
    options: [
      "Increased energy",
      "Nausea and vomiting",
      "Improved vision",
      "Weight gain"
    ],
    correctIndex: 1
  },
  {
    question: "What is the role of an antidote in poisoning?",
    options: [
      "To induce vomiting",
      "To neutralize a specific poison",
      "To replace lost blood",
      "To clean the stomach"
    ],
    correctIndex: 1
  },
  {
    question: "Which of the following is a nursing intervention for inhaled poisoning?",
    options: [
      "Induce vomiting",
      "Carry the patient to fresh air immediately",
      "Administer syrup of ipecac",
      "Ignore the ABCs"
    ],
    correctIndex: 1
  },
  {
    question: "Poisoning can result from exposure to toxins, poisons, or other harmful substances.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Inducing vomiting is always the first step in treating poisoning.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Carbon monoxide poisoning requires immediate treatment.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Activated charcoal is used to induce vomiting.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Household products like nail polish remover can cause poisoning.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "The \"rule of nines\" is used to estimate the extent of poisoning.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Ingested corrosive poisons include alkaline and acid agents.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Syrup of ipecac is highly effective in preventing poisoning.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Carbon monoxide binds to hemoglobin, reducing oxygen-carrying capacity.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Monitoring vital signs is unnecessary in poisoning cases.",
    options: ["True", "False"],
    correctIndex: 1
  }
];


  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const questions = shuffleArray(allQuestions);

  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');

  // توليد الأسئلة في الصفحة
  questions.forEach((q, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';
    questionBlock.id = `q${index}`;

    const questionText = document.createElement('p');
    questionText.innerText = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${i}"> ${option}
      `;
      questionBlock.appendChild(label);
    });

    quizContainer.appendChild(questionBlock);
  });

  function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const questionBlock = document.getElementById(`q${index}`);

      // إزالة التغذية الراجعة القديمة
      questionBlock.classList.remove("correct", "incorrect");
      const oldFeedback = questionBlock.querySelector(".feedback");
      if (oldFeedback) oldFeedback.remove();

      let feedback = document.createElement("div");
      feedback.className = "feedback";

      if (selected) {
        const selectedValue = parseInt(selected.value);
        if (selectedValue === q.correctIndex) {
          score++;
          questionBlock.classList.add("correct");
          feedback.innerHTML = `✅ Correct`;
          feedback.style.color = "green";
        } else {
          questionBlock.classList.add("incorrect");
          feedback.innerHTML = `❌ Wrong – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
          feedback.style.color = "red";
        }
      } else {
        questionBlock.classList.add("incorrect");
        feedback.innerHTML = `⚠️ Not Answered – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
        feedback.style.color = "orange";
      }

      questionBlock.appendChild(feedback);
    });

    resultContainer.classList.add('result-transition');
    resultContainer.innerText = `You scored ${score} out of ${questions.length}`;
  }

  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };