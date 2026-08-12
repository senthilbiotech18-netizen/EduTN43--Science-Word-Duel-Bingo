export interface OfflineWordInfo {
  word: string;
  definition: string;
  etymology: string;
  funFact: string;
  score: number;
}

export const SCIENCE_DICTIONARIES: Record<string, OfflineWordInfo[]> = {
  "characteristics-classification": [
    { word: "Binomial System", definition: "System of naming organisms using two names: genus and species.", etymology: "From Latin 'bi-' (two) + 'nomen' (name).", funFact: "Pioneered by Carl Linnaeus in 1753 to classify all living species!", score: 20 },
    { word: "Dichotomous Key", definition: "Diagnostic tool dividing choices into pairs of opposing characteristics to identify organisms.", etymology: "From Greek 'dichotomos' (cut in two) + 'kleis' (key).", funFact: "Dichotomous keys allow botanists to identify plant species quickly in the field.", score: 20 },
    { word: "Species", definition: "Group of organisms that can interbreed to produce fertile offspring.", etymology: "From Latin 'species' (kind, appearance, or form).", funFact: "Mules are infertile offspring of a horse and donkey, proving they are different species.", score: 10 },
    { word: "Genus", definition: "Taxonomic category ranking above species and below family.", etymology: "From Latin 'genus' (birth, race, or kind).", funFact: "Homo is the human genus, which once included Neanderthals and Homo erectus.", score: 10 },
    { word: "Kingdom", definition: "Highest taxonomic rank classifying organisms into major groups like Animals, Plants, and Fungi.", etymology: "From Old English 'cyningdom' (realm of a king).", funFact: "Traditional taxonomy recognized 5 kingdoms: Animals, Plants, Fungi, Protists, Prokaryotes.", score: 10 },
    { word: "Vertebrates", definition: "Animals possessing a back bone or spinal column.", etymology: "From Latin 'vertebratus' (joint of the spine).", funFact: "Vertebrates make up less than 5% of all animal species on Earth!", score: 10 },
    { word: "Invertebrates", definition: "Animals lacking a vertebral column or backbone.", etymology: "From Latin 'in-' (not) + 'vertebratus'.", funFact: "Invertebrates include insects, corals, octopuses, and jellyfish.", score: 10 },
    { word: "Arthropods", definition: "Invertebrates with jointed legs and an exoskeleton made of chitin.", etymology: "From Greek 'arthron' (joint) + 'pous' (foot).", funFact: "Arthropods represent over 80% of all described animal species!", score: 20 },
    { word: "Crustaceans", definition: "Arthropods mostly aquatic with two pairs of antennae and hard shells.", etymology: "From Latin 'crusta' (crust or hard shell).", funFact: "Crabs, lobsters, shrimp, and woodlice belong to crustaceans.", score: 20 },
    { word: "Myriapods", definition: "Arthropods with elongated bodies and numerous leg-bearing segments.", etymology: "From Greek 'myrios' (countless/ten thousand) + 'pous' (foot).", funFact: "Centipedes are venomous predators, while millipedes feed on decaying plant litter.", score: 20 },
    { word: "Arachnids", definition: "Eight-legged arthropods including spiders, scorpions, ticks, and mites.", etymology: "From Greek 'arachne' (spider).", funFact: "Spiders produce silk stronger than steel fiber of equivalent thickness!", score: 10 },
    { word: "Insects", definition: "Six-legged arthropods with body divided into head, thorax, and abdomen.", etymology: "From Latin 'insectum' (cut into sections).", funFact: "Insects are the only group of invertebrates that evolved powered flight.", score: 10 },
    { word: "Monocotyledon", definition: "Flowering plant with seeds possessing one embryonic seed leaf.", etymology: "From Greek 'monos' (single) + 'kotyledon' (cup-shaped socket).", funFact: "Grasses, corn, orchids, and palms are monocotyledonous plants.", score: 20 },
    { word: "Dicotyledon", definition: "Flowering plant with seeds possessing two embryonic seed leaves.", etymology: "From Greek 'di-' (two) + 'kotyledon'.", funFact: "Roses, oaks, sunflowers, and beans are dicotyledonous plants.", score: 20 },
    { word: "Viruses", definition: "Non-cellular microscopic infectious agents that replicate only inside host cells.", etymology: "From Latin 'virus' (poison or venomous substance).", funFact: "Viruses are not classified into living kingdoms because they lack cellular metabolic machinery.", score: 10 },
    { word: "Bacteria", definition: "Single-celled prokaryotic microorganisms lacking a membrane-bound nucleus.", etymology: "From Greek 'bakterion' (small rod).", funFact: "There are more bacterial cells in the human gut than human cells in the body!", score: 10 },
    { word: "Fungi", definition: "Eukaryotic organisms that absorb nutrients from organic matter, including yeasts and mushrooms.", etymology: "From Latin 'fungus' (mushroom).", funFact: "Fungal cell walls are composed of chitin, the same substance found in arthropod shells.", score: 10 }
  ],
  "organisation-organism": [
    { word: "Cell", definition: "Basic structural and functional unit of all living organisms.", etymology: "From Latin 'cella' (small room).", funFact: "Discovered by Robert Hooke in 1665 while inspecting cork under a microscope!", score: 10 },
    { word: "Tissue", definition: "Group of similar cells working together to perform a specific function.", etymology: "From Old French 'tissu' (woven fabric).", funFact: "Muscle, nerve, epithelial, and connective tissue are the 4 main human tissue types.", score: 10 },
    { word: "Organ", definition: "Structure consisting of multiple tissue types working together for a main function.", etymology: "From Greek 'organon' (tool or instrument).", funFact: "The skin is the largest organ in the human body!", score: 10 },
    { word: "Organ System", definition: "Group of organs working together to perform major body functions.", etymology: "From Greek 'organon' + 'systema' (whole compound).", funFact: "The human body has 11 major organ systems including nervous, digestive, and circulatory.", score: 10 },
    { word: "Organism", definition: "Individual living entity capable of carrying out life processes.", etymology: "From Greek 'organismos' (organized structure).", funFact: "A single bacterial cell is an organism, just like a 100-ton blue whale!", score: 10 },
    { word: "Ciliated Cell", definition: "Specialized cell with hair-like projections sweeping mucus and trapped dust.", etymology: "From Latin 'cilium' (eyelash).", funFact: "Ciliated cells line the trachea to sweep respiratory debris away from lungs.", score: 20 },
    { word: "Root Hair Cell", definition: "Specialized plant cell with long projection increasing surface area for water absorption.", etymology: "From Old English 'rot' + 'hær'.", funFact: "A single rye plant can grow over 14 billion root hair cells!", score: 20 },
    { word: "Xylem Vessel", definition: "Hollow tube of dead cells reinforced with lignin transporting water and minerals.", etymology: "From Greek 'xylon' (wood).", funFact: "Xylem vessel walls are thickened with lignin so they don't collapse under high tension.", score: 20 },
    { word: "Palisade Cell", definition: "Column-shaped leaf mesophyll cell packed with chloroplasts for photosynthesis.", etymology: "From French 'palissade' (stake or fence).", funFact: "Palisade cells are positioned right near the top of leaves to catch maximum sunlight.", score: 20 },
    { word: "Red Blood Cell", definition: "Biconcave disc cell packed with hemoglobin to transport oxygen.", etymology: "From Old English 'read' + 'blod'.", funFact: "Red blood cells lack a nucleus in mammals to maximize space for oxygen transport.", score: 20 },
    { word: "Sperm Cell", definition: "Male reproductive gamete specialized with flagellum tail and acrosome enzymes.", etymology: "From Greek 'sperma' (seed).", funFact: "Sperm cells are the smallest cells in the human body!", score: 20 },
    { word: "Egg Cell", definition: "Female gamete containing nutrient reserves for early embryonic development.", etymology: "From Old Norse 'egg'.", funFact: "The egg cell or ovum is the largest cell in the human body, visible to the naked eye.", score: 20 },
    { word: "Magnification", definition: "Number of times larger an image appears compared to real specimen size.", etymology: "From Latin 'magnificus' (noble or great).", funFact: "Electron microscopes can reach magnifications over 1,000,000 times!", score: 20 },
    { word: "Micrometer", definition: "Unit of length equal to one millionth of a meter (µm).", etymology: "From Greek 'mikros' (small) + 'metron' (measure).", funFact: "A typical plant or animal cell measures between 10 and 100 micrometers.", score: 20 }
  ],
  "cell-movement": [
    { word: "Diffusion", definition: "Net movement of particles from high to low concentration down a gradient.", etymology: "From Latin 'diffundere' (to pour out or spread).", funFact: "Oxygen diffuses into blood capillaries across alveoli membranes passively!", score: 10 },
    { word: "Osmosis", definition: "Diffusion of water molecules through a selectively permeable membrane.", etymology: "From Greek 'osmos' (push or impulse).", funFact: "Osmosis determines whether plant cells remain turgid or wilt from water loss.", score: 20 },
    { word: "Active Transport", definition: "Movement of molecules across membrane against gradient using ATP energy.", etymology: "From Latin 'activus' + 'transportare'.", funFact: "Root hair cells use active transport to absorb mineral ions from dilute soil solutions.", score: 20 },
    { word: "Concentration Gradient", definition: "Difference in particle concentration between two neighboring regions.", etymology: "From Latin 'concentra' + 'gradus' (step/degree).", funFact: "Steeper concentration gradients produce faster diffusion rates.", score: 20 },
    { word: "Water Potential", definition: "Tendency of water molecules to move from one area to another.", etymology: "From Old English 'wæter' + Latin 'potentia' (power).", funFact: "Pure water has the highest possible water potential of zero kilopascals.", score: 20 },
    { word: "Semi Permeable Membrane", definition: "Membrane allowing small solvent molecules through while blocking larger solutes.", etymology: "From Latin 'semi' (half) + 'permeabilis' (passable).", funFact: "Dialysis tubing is an artificial semi-permeable membrane used in kidney machines.", score: 20 },
    { word: "Turgor Pressure", definition: "Internal fluid pressure pushing plant cell membrane against its cell wall.", etymology: "From Latin 'turgere' (to swell).", funFact: "Turgor pressure gives non-woody plant stems their mechanical rigidity.", score: 20 },
    { word: "Plasmolysis", definition: "Shrinkage of plant cell cytoplasm away from cell wall due to water loss.", etymology: "From Greek 'plasma' (molded material) + 'lysis' (loosening).", funFact: "Plasmolysis occurs when plant cells are placed in concentrated hypertonic salt solutions.", score: 30 },
    { word: "Flaccid", definition: "Lacking turgidity or firmness due to equal or reduced water potential.", etymology: "From Latin 'flaccidus' (flabby or drooping).", funFact: "Plants wilt when leaf cells become flaccid from dehydration.", score: 10 },
    { word: "Hypertonic", definition: "Solution with higher solute concentration than inside the cell.", etymology: "From Greek 'hyper' (above) + 'tonos' (tension).", funFact: "Red blood cells placed in hypertonic solutions shrivel up in a process called crenation.", score: 20 },
    { word: "Hypotonic", definition: "Solution with lower solute concentration than inside the cell.", etymology: "From Greek 'hypo' (under/below) + 'tonos'.", funFact: "Animal cells burst (lyse) in hypotonic solutions because they lack rigid cell walls.", score: 20 },
    { word: "Isotonic", definition: "Solution having equal solute concentration and water potential as inside cell.", etymology: "From Greek 'isos' (equal) + 'tonos'.", funFact: "Medical saline IV fluids are formulated to be strictly isotonic to human blood plasma.", score: 20 },
    { word: "Carrier Protein", definition: "Membrane protein that undergoes shape changes to pump solutes across membranes.", etymology: "From Old French 'carrier' + Protein.", funFact: "The sodium-potassium pump is a carrier protein vital for nerve signal conduction.", score: 20 }
  ],
  "biological-molecules": [
    { word: "Monosaccharide", definition: "Simple single sugar unit like glucose, fructose, or galactose.", etymology: "From Greek 'monos' (single) + 'sakcharon' (sugar).", funFact: "Glucose is the primary fuel used by brain cells during respiration.", score: 20 },
    { word: "Disaccharide", definition: "Double sugar molecule formed by joining two monosaccharides.", etymology: "From Greek 'di-' (two) + 'sakcharon'.", funFact: "Sucrose (table sugar) is a disaccharide made of glucose and fructose.", score: 20 },
    { word: "Polysaccharide", definition: "Complex carbohydrate composed of many repeating monosaccharide units.", etymology: "From Greek 'polys' (many) + 'sakcharon'.", funFact: "Starch, glycogen, and cellulose are all polysaccharides made purely of glucose units!", score: 20 },
    { word: "Glucose", definition: "Hexose monosaccharide sugar essential for respiration energy.", etymology: "From Greek 'gleukos' (sweet wine).", funFact: "Plants synthesize glucose during photosynthesis using solar energy.", score: 10 },
    { word: "Starch", definition: "Insoluble storage carbohydrate in plant cells consisting of amylose and amylopectin.", etymology: "From Old English 'stercan' (to stiffen).", funFact: "Starch turns deep blue-black when tested with iodine solution.", score: 10 },
    { word: "Glycogen", definition: "Branched storage carbohydrate stored in animal liver and muscle tissue.", etymology: "From Greek 'glykys' (sweet) + '-gen' (producer).", funFact: "Glycogen is known as 'animal starch' because of its storage function.", score: 20 },
    { word: "Cellulose", definition: "Structural polysaccharide forming rigid plant cell wall fibers.", etymology: "From French 'cellule' (cell) + '-ose' (sugar suffix).", funFact: "Cellulose is the most abundant organic polymer on Earth!", score: 10 },
    { word: "Amino Acid", definition: "Building block subunit of proteins containing amino and carboxyl groups.", etymology: "From 'amine' (ammonia derivative) + Acid.", funFact: "20 standard amino acids combine in different sequences to make all proteins.", score: 20 },
    { word: "Peptide Bond", definition: "Covalent bond linking adjacent amino acids in a polypeptide chain.", etymology: "From Greek 'peptein' (to digest).", funFact: "Ribosomes catalyze peptide bond formation during protein synthesis.", score: 20 },
    { word: "Lipid", definition: "Insoluble organic compound consisting of glycerol and fatty acids.", etymology: "From Greek 'lipos' (fat).", funFact: "Lipids provide twice as much energy per gram as carbohydrates!", score: 10 },
    { word: "Fatty Acid", definition: "Hydrocarbon chain with terminal carboxyl group forming lipids.", etymology: "From Old English 'fæt' + Acid.", funFact: "Saturated fatty acids have single bonds and stay solid at room temperature.", score: 20 },
    { word: "Glycerol", definition: "Three-carbon alcohol backbone that combines with fatty acids to form triglycerides.", etymology: "From Greek 'glykys' (sweet).", funFact: "One molecule of glycerol bonds with three fatty acid chains to form a lipid.", score: 20 },
    { word: "Benedicts Test", definition: "Chemical test for reducing sugars that turns brick-red when heated.", etymology: "Eponymous, named after American chemist Stanley Benedict.", funFact: "A brick-red precipitate confirms high concentration of reducing sugars like glucose.", score: 30 },
    { word: "Biuret Test", definition: "Reagent test for proteins that changes color from pale blue to purple.", etymology: "From chemical compound biuret (urea derivative).", funFact: "Biuret reagent detects peptide bonds in proteins.", score: 30 },
    { word: "Iodine Test", definition: "Test for starch changing iodine from orange-brown to blue-black.", etymology: "From Greek 'ioeides' (violet-colored).", funFact: "Used by botanists to test if a leaf has produced starch after photosynthesis.", score: 20 },
    { word: "Ethanol Emulsion Test", definition: "Test for fats where sample dissolves in ethanol and forms milky emulsion in water.", etymology: "From 'ethanol' + Latin 'emulgere' (to milk out).", funFact: "A cloudy white emulsion layer indicates the presence of lipids.", score: 30 }
  ],
  "enzymes": [
    { word: "Biological Catalyst", definition: "Protein that speeds up biochemical reactions without being consumed.", etymology: "From Greek 'bios' (life) + 'katalysis' (dissolution).", funFact: "Enzymes can accelerate reactions by over a million times!", score: 20 },
    { word: "Active Site", definition: "Specific 3D region of enzyme where substrate molecule binds.", etymology: "From Latin 'activus' + 'situs' (position/place).", funFact: "The active site shape is complementary to its specific substrate.", score: 20 },
    { word: "Substrate", definition: "Reactant molecule upon which a specific enzyme acts.", etymology: "From Latin 'substratum' (spread underneath).", funFact: "Amylase enzyme specifically binds starch substrate to break it down into maltose.", score: 10 },
    { word: "Enzyme Substrate Complex", definition: "Temporary complex formed when substrate binds to enzyme active site.", etymology: "From 'enzyme' + 'substrate' + Latin 'complexus'.", funFact: "Reaction products are released from active site immediately after catalytic breakdown.", score: 30 },
    { word: "Lock and Key Model", definition: "Model describing rigid complementary fit between substrate and enzyme active site.", etymology: "Metaphor coined by Emil Fischer in 1894.", funFact: "Modern biology also recognizes 'induced fit' where active sites flex slightly.", score: 20 },
    { word: "Denaturation", definition: "Irreversible loss of enzyme 3D shape and active site function caused by high temp or extreme pH.", etymology: "From Latin 'de-' (away from) + 'natura' (nature).", funFact: "Frying an egg white denatures albumin protein from clear liquid to solid white!", score: 20 },
    { word: "Optimum Temperature", definition: "Temperature at which enzyme catalytic rate is highest.", etymology: "From Latin 'optimus' (best) + 'temperatura'.", funFact: "Human enzymes typically have an optimum temperature around 37°C.", score: 20 },
    { word: "Optimum pH", definition: "pH level at which an enzyme operates at maximum efficiency.", etymology: "From Latin 'optimus' + pH (potential Hydrogen).", funFact: "Stomach pepsin works best at acidic pH 2, while intestinal trypsin prefers alkaline pH 8!", score: 20 },
    { word: "Anabolism", definition: "Metabolic reactions building complex molecules from simpler ones requiring energy.", etymology: "From Greek 'anabole' (raising up).", funFact: "Protein synthesis and photosynthesis are primary anabolic pathways.", score: 20 },
    { word: "Catabolism", definition: "Metabolic breakdown of complex molecules into simpler units releasing energy.", etymology: "From Greek 'katabole' (throwing down).", funFact: "Respiration and digestion are essential catabolic pathways.", score: 20 },
    { word: "Pepsin", definition: "Digestive protease enzyme secreted in stomach breaking proteins into peptides.", etymology: "From Greek 'pepsis' (digestion).", funFact: "Pepsin is one of the few human enzymes that functions in extremely strong stomach acid.", score: 20 },
    { word: "Amylase", definition: "Digestive enzyme breaking down starch into maltose sugars.", etymology: "From Greek 'amylon' (starch) + '-ase' (enzyme suffix).", funFact: "Salivary amylase begins digesting starches right in your mouth while chewing!", score: 10 },
    { word: "Lipase", definition: "Enzyme breaking lipids down into fatty acids and glycerol.", etymology: "From Greek 'lipos' (fat) + '-ase'.", funFact: "Pancreas secretes lipase into the small intestine to digest fats.", score: 10 }
  ],
  "plant-nutrition": [
    { word: "Photosynthesis", definition: "Process converting light energy, carbon dioxide, and water into glucose and oxygen.", etymology: "From Greek 'phos' (light) + 'synthesis' (putting together).", funFact: "Photosynthesis produces almost all atmospheric oxygen breathed on Earth!", score: 10 },
    { word: "Chlorophyll", definition: "Green photosynthetic pigment absorbing blue and red light wavelengths.", etymology: "From Greek 'chloros' (pale green) + 'phyllon' (leaf).", funFact: "Chlorophyll contains a central magnesium ion crucial for absorbing photons.", score: 20 },
    { word: "Palisade Mesophyll", definition: "Top leaf layer of closely packed columnar cells loaded with chloroplasts.", etymology: "From French 'palissade' + Greek 'mesos' (middle) + 'phyllon'.", funFact: "Absorbs most light energy entering the top surface of leaves.", score: 20 },
    { word: "Spongy Mesophyll", definition: "Loosely arranged leaf tissue with air spaces facilitating gas exchange.", etymology: "From Old English 'sponge' + Mesophyll.", funFact: "Air gaps allow carbon dioxide and oxygen to diffuse quickly through leaf interior.", score: 20 },
    { word: "Stomata", definition: "Microscopic leaf surface pores regulating transpiration and gas exchange.", etymology: "From Greek 'stoma' (mouth or opening).", funFact: "Most stomata are located on the shaded lower surface of dicot leaves.", score: 10 },
    { word: "Guard Cells", definition: "Pairs of epidermal cells controlling the opening and closing of stomata.", etymology: "From Old French 'garde' + Cell.", funFact: "Guard cells swell with water to open stomata and shrink to close them.", score: 20 },
    { word: "Epidermis", definition: "Outer protective cell layer covering leaf, stem, and root surfaces.", etymology: "From Greek 'epi' (upon) + 'derma' (skin).", funFact: "Leaf upper epidermis secretes a waxy cuticle preventing desiccation.", score: 10 },
    { word: "Cuticle", definition: "Waxy waterproof layer coating leaf surface to prevent evaporation.", etymology: "From Latin 'cuticula' (little skin).", funFact: "Desert plants grow thick waxy cuticles to conserve water in extreme heat.", score: 10 },
    { word: "Limiting Factor", definition: "Environmental condition in shortest supply that restricts photosynthesis rate.", etymology: "From Latin 'limitare' + 'factor' (doer/maker).", funFact: "Light intensity, CO2 concentration, and temperature are main limiting factors.", score: 20 },
    { word: "Chloroplast", definition: "Organelle hosting photosynthesis light and dark reactions.", etymology: "From Greek 'chloros' + 'plastos' (molded).", funFact: "Chloroplasts move around inside plant cells to optimize light absorption!", score: 20 },
    { word: "Thylakoid", definition: "Flattened membrane sac inside chloroplast hosting light-dependent reactions.", etymology: "From Greek 'thylakos' (pouch) + '-oid'.", funFact: "Thylakoid membranes contain light-harvesting chlorophyll protein complexes.", score: 20 }
  ],
  "human-nutrition": [
    { word: "Balanced Diet", definition: "Diet containing correct proportions of carbohydrates, fats, proteins, vitamins, minerals, water, and fiber.", etymology: "From Latin 'bilanx' (two scales) + Greek 'diaita' (way of living).", funFact: "Prevents nutritional deficiency diseases like scurvy, rickets, and anemia.", score: 10 },
    { word: "Ingestion", definition: "Taking food and drink into the body through the mouth.", etymology: "From Latin 'ingestio' (pouring in).", funFact: "First stage of human holozoic nutrition.", score: 10 },
    { word: "Mechanical Digestion", definition: "Physical breakdown of food into smaller pieces without chemical alteration.", etymology: "From Greek 'mechane' (machine) + Digestion.", funFact: "Chewing with teeth and stomach churning increase surface area for digestive enzymes.", score: 20 },
    { word: "Chemical Digestion", definition: "Breakdown of large insoluble food molecules into small soluble ones using enzymes.", etymology: "From Greek 'khemeia' + Digestion.", funFact: "Converts starches to glucose, proteins to amino acids, and lipids to fatty acids.", score: 20 },
    { word: "Absorption", definition: "Movement of digested nutrient molecules across gut wall into blood or lymph.", etymology: "From Latin 'absorbere' (swallow down).", funFact: "Mainly occurs across specialized villi lining the ileum.", score: 10 },
    { word: "Assimilation", definition: "Movement of absorbed food molecules into body cells where they are used.", etymology: "From Latin 'assimilare' (make similar).", funFact: "Liver converts absorbed amino acids into proteins or breaks excess down by deamination.", score: 20 },
    { word: "Egestion", definition: "Passing out of undigested food material as feces through the anus.", etymology: "From Latin 'egestio' (carrying out).", funFact: "Egestion is distinct from excretion because egested waste never entered body cells!", score: 10 },
    { word: "Peristalsis", definition: "Involuntary muscle contractions pushing food along alimentary canal.", etymology: "From Greek 'peri' (around) + 'stalsis' (constriction).", funFact: "Enables swallowing even if a person is standing upside down!", score: 20 },
    { word: "Pepsin", definition: "Stomach protease enzyme digesting proteins in acidic conditions.", etymology: "From Greek 'pepsis' (digestion).", funFact: "Hydrochloric acid in stomach activates pepsinogen into active pepsin.", score: 20 },
    { word: "Bile", definition: "Alkaline fluid produced by liver that neutralizes stomach acid and emulsifies fats.", etymology: "From Latin 'bilis' (bile/choler).", funFact: "Stored in gallbladder and released into duodenum during digestion.", score: 10 },
    { word: "Villus", definition: "Finger-like projection on small intestine inner wall increasing absorption surface area.", etymology: "From Latin 'villus' (shaggy hair).", funFact: "Microvilli on villus epithelial cells boost internal gut surface area to over 200 m²!", score: 20 },
    { word: "Duodenum", definition: "First part of small intestine receiving bile and pancreatic juice.", etymology: "From Latin 'duodeni' (twelve fingers long).", funFact: "Site of major digestive enzyme activity in humans.", score: 20 },
    { word: "Ileum", definition: "Final section of small intestine specialized for nutrient absorption.", etymology: "From Latin 'ileum' (groin or flank).", funFact: "Lined with millions of villi and capillary networks.", score: 20 },
    { word: "Scurvy", definition: "Vitamin C deficiency disease causing bleeding gums and poor wound healing.", etymology: "From Old Norse 'skyrbjugr'.", funFact: "Scurvy killed thousands of sailors until James Lind discovered citrus fruits prevented it!", score: 20 }
  ],
  "transport-plants": [
    { word: "Xylem", definition: "Vascular tissue conducting water and mineral ions upwards from roots.", etymology: "From Greek 'xylon' (wood).", funFact: "Wood in trees is formed almost entirely of secondary xylem tissue!", score: 10 },
    { word: "Phloem", definition: "Vascular tissue transporting sucrose and amino acids from sources to sinks.", etymology: "From Greek 'phloios' (bark).", funFact: "Phloem tube elements remain living cells aided by companion cells.", score: 10 },
    { word: "Transpiration", definition: "Loss of water vapor from leaf stomata driving water uptake from roots.", etymology: "From Latin 'trans' (across) + 'spirare' (breathe).", funFact: "99% of water absorbed by plant roots is lost through transpiration!", score: 20 },
    { word: "Translocation", definition: "Transport of soluble organic substances like sucrose in phloem tissue.", etymology: "From Latin 'trans' + 'locare' (to place).", funFact: "Translocation can move nutrients both upwards and downwards in plants.", score: 20 },
    { word: "Root Hair", definition: "Extension of root epidermal cell specialized for absorbing water and ions.", etymology: "From Old English 'rot' + 'hær'.", funFact: "Dramatically increases root surface area in contact with soil water.", score: 10 },
    { word: "Cohesion", definition: "Attraction between water molecules holding transpiration stream together.", etymology: "From Latin 'cohaerere' (stick together).", funFact: "Hydrogen bonding creates high tensile strength allowing water columns to pull up 100-meter tall trees!", score: 20 },
    { word: "Adhesion", definition: "Attraction between water molecules and hydrophilic xylem vessel walls.", etymology: "From Latin 'adhaerere' (stick to).", funFact: "Prevents water columns from breaking under gravitational pull.", score: 20 },
    { word: "Potometer", definition: "Apparatus measuring plant water uptake rate to estimate transpiration.", etymology: "From Greek 'potos' (drink) + 'metron' (measure).", funFact: "Measures movement of an air bubble in a capillary tube over time.", score: 30 },
    { word: "Wilting", definition: "Drooping of leaves caused by loss of cell turgor pressure when transpiration exceeds absorption.", etymology: "From Middle English 'wilten' (fade/wither).", funFact: "Wilting reduces leaf surface area exposed to sun to limit further water loss.", score: 10 },
    { word: "Sink and Source", definition: "Source produces sugars (leaves); sink receives sugars (roots, tubers, flowers).", etymology: "From Old English 'sincan' + 'seorce'.", funFact: "Storage roots act as sinks in summer and sources in spring!", score: 20 }
  ],
  "transport-animals": [
    { word: "Double Circulation", definition: "Circulatory system where blood passes through heart twice for each complete circuit.", etymology: "From Latin 'duplus' + 'circulatio'.", funFact: "Maintains high blood pressure to supply oxygen rapidly to active mammalian tissues.", score: 20 },
    { word: "Atrium", definition: "Upper heart chamber receiving blood returning from body or lungs.", etymology: "From Latin 'atrium' (central entry hall).", funFact: "Human heart has right and left atria receiving deoxygenated and oxygenated blood.", score: 10 },
    { word: "Ventricle", definition: "Thick-walled lower heart chamber pumping blood into arteries.", etymology: "From Latin 'ventriculus' (little belly).", funFact: "Left ventricle has thicker muscular walls because it pumps blood around entire body!", score: 10 },
    { word: "Coronary Artery", definition: "Blood vessel supplying oxygenated blood directly to heart muscle tissue.", etymology: "From Latin 'corona' (crown) + Artery.", funFact: "Blockage of coronary arteries causes coronary heart disease and heart attacks.", score: 20 },
    { word: "Artery", definition: "Thick muscular elastic vessel carrying blood away from heart under high pressure.", etymology: "From Greek 'arteria' (windpipe/air duct).", funFact: "Elastic tissue stretches during heartbeat and recoils to maintain smooth flow.", score: 10 },
    { word: "Vein", definition: "Thin-walled blood vessel with valves returning blood to heart under low pressure.", etymology: "From Latin 'vena'.", funFact: "Valves in veins prevent backflow of blood driven by surrounding skeletal muscle contraction.", score: 10 },
    { word: "Capillary", definition: "Microscopic single-cell thin blood vessel for exchange of gases and nutrients.", etymology: "From Latin 'capillaris' (hair-like).", funFact: "Capillary walls are one cell thick to allow rapid diffusion of oxygen and glucose.", score: 10 },
    { word: "Hemoglobin", definition: "Iron-rich protein in red blood cells binding oxygen reversibly.", etymology: "From Greek 'haima' + Latin 'globus'.", funFact: "Turns bright red when bound with oxygen forming oxyhemoglobin.", score: 20 },
    { word: "Phagocyte", definition: "White blood cell that engulfs and digests pathogens in phagocytosis.", etymology: "From Greek 'phagein' (eat) + 'kytos' (cell).", funFact: "Forms lobed nucleus allowing it to squeeze through capillary walls.", score: 20 },
    { word: "Lymphocyte", definition: "White blood cell producing specific antibodies and memory cells.", etymology: "From Latin 'lympha' (water) + 'kytos'.", funFact: "Recognizes specific foreign antigens on pathogen surfaces.", score: 20 },
    { word: "Platelets", definition: "Cell fragments initiating blood clotting by converting fibrinogen into fibrin mesh.", etymology: "From Old French 'plate' + diminutive '-let'.", funFact: "Prevents excessive blood loss and blocks pathogen entry through wounds.", score: 20 },
    { word: "Plasma", definition: "Straw-colored liquid blood component transporting dissolved solutes, hormones, and CO2.", etymology: "From Greek 'plasma' (molded material).", funFact: "Makes up 55% of total blood volume and is 90% water.", score: 10 }
  ],
  "diseases-immunity": [
    { word: "Pathogen", definition: "Disease-causing microorganism such as bacterium, virus, fungus, or protoctist.", etymology: "From Greek 'pathos' (suffering) + '-gen' (producer).", funFact: "Cholera, malaria, influenza, and athlete's foot are caused by distinct pathogen types.", score: 10 },
    { word: "Transmissible Disease", definition: "Disease in which pathogen can be passed from one host to another.", etymology: "From Latin 'transmissio' (passing across).", funFact: "Transmitted via direct contact or indirect vectors like mosquitoes and droplets.", score: 20 },
    { word: "Active Immunity", definition: "Immunity acquired when body produces its own antibodies following infection or vaccination.", etymology: "From Latin 'activus' + 'immunitas' (exemption).", funFact: "Provides long-term protection due to production of memory cells.", score: 20 },
    { word: "Passive Immunity", definition: "Short-term immunity from acquiring ready-made antibodies from another organism.", etymology: "From Latin 'passivus' + 'immunitas'.", funFact: "Maternal antibodies transferred across placenta or in breast milk give passive immunity to babies.", score: 20 },
    { word: "Vaccine", definition: "Harmless preparation of weakened or dead pathogen stimulating active antibody response.", etymology: "From Latin 'vacca' (cow), after Edward Jenner's smallpox cowpox vaccine.", funFact: "Vaccines eradicated smallpox globally by 1980!", score: 10 },
    { word: "Antigen", definition: "Foreign protein molecule on pathogen surface triggering immune response.", etymology: "From 'antibody generator'.", funFact: "Antibodies bind to complementary antigens like a key fitting a lock.", score: 20 },
    { word: "Antibody", definition: "Y-shaped protein produced by lymphocytes that binds specifically to foreign antigens.", etymology: "Translation of German 'Antikörper'.", funFact: "Antibodies neutralize toxins and clump pathogens together for phagocytes.", score: 20 },
    { word: "Memory Cell", definition: "Long-lived lymphocyte giving rapid immune response upon re-exposure to same pathogen.", etymology: "From Latin 'memoria' + Cell.", funFact: "Memory cells prevent you from getting sick from the same chickenpox virus twice!", score: 20 },
    { word: "Autoimmune", definition: "Condition where immune system mistakenly attacks host body tissues.", etymology: "From Greek 'autos' (self) + Immune.", funFact: "Type 1 diabetes is an autoimmune disease where immune cells destroy insulin-producing pancreas cells.", score: 20 }
  ],
  "gas-exchange": [
    { word: "Alveoli", definition: "Microscopic air sacs in lungs providing massive surface area for gas exchange.", etymology: "From Latin 'alveolus' (little cavity).", funFact: "Human lungs contain around 300 million alveoli with total area equal to a tennis court!", score: 20 },
    { word: "Trachea", definition: "Windpipe reinforced with C-shaped cartilage rings keeping airway open.", etymology: "From Greek 'tracheia' (rough artery).", funFact: "C-shaped cartilage allows esophagus behind it to expand during swallowing.", score: 10 },
    { word: "Bronchiole", definition: "Small branching respiratory tube delivering air from bronchi to alveoli.", etymology: "From Greek 'bronchos' + Latin diminutive '-ole'.", funFact: "Smooth muscle in bronchiole walls constricts during asthma attacks.", score: 20 },
    { word: "Intercostal Muscle", definition: "Muscles between ribs contracting during ventilation.", etymology: "From Latin 'inter' (between) + 'costa' (rib).", funFact: "External intercostals pull ribcage up and out during inspiration.", score: 20 },
    { word: "Diaphragm", definition: "Dome-shaped muscle sheet separating thorax and abdomen active in breathing.", etymology: "From Greek 'diaphragma' (partition).", funFact: "Contracts and flattens downwards to increase thoracic volume during inhalation.", score: 20 },
    { word: "Ventilation", definition: "Movement of air into and out of lungs maintaining steep concentration gradients.", etymology: "From Latin 'ventilatio' (fanning/airing).", funFact: "Inhalation is active while quiet exhalation is passive due to lung elastic recoil.", score: 20 },
    { word: "Cilia", definition: "Microscopic hair projections sweeping mucus up respiratory tract.", etymology: "From Latin 'cilium' (eyelash).", funFact: "Toxic tar in cigarette smoke paralyzes cilia, leading to smoker's cough.", score: 10 },
    { word: "Goblet Cell", definition: "Mucus-secreting cell in respiratory epithelium trapping dust and bacteria.", etymology: "From Old French 'gobelet' (cup-shaped cell).", funFact: "Mucus traps inhaled pathogens before cilia sweep them to the pharynx to be swallowed.", score: 20 }
  ],
  "respiration": [
    { word: "Aerobic Respiration", definition: "Chemical reactions in cells breaking down glucose with oxygen to release ATP.", etymology: "From Greek 'aer' (air) + 'bios' (life).", funFact: "Yields roughly 36 to 38 ATP energy molecules per glucose molecule oxidized!", score: 20 },
    { word: "Anaerobic Respiration", definition: "Cellular breakdown of glucose releasing energy without using oxygen.", etymology: "From Greek 'an-' (without) + Aerobic.", funFact: "Produces lactic acid in human muscle cells and ethanol in yeast cells.", score: 20 },
    { word: "Lactic Acid", definition: "Toxic waste product of anaerobic respiration in human muscles causing fatigue.", etymology: "From Latin 'lac' (milk).", funFact: "Lactic acid build-up causes muscle soreness after strenuous sprinting.", score: 20 },
    { word: "Oxygen Debt", definition: "Amount of extra oxygen required after exercise to break down accumulated lactic acid.", etymology: "From Greek 'oxys' (acid) + Old French 'dette'.", funFact: "Heavy breathing after exercise supplies oxygen to liver to convert lactic acid back to glucose.", score: 20 },
    { word: "Fermentation", definition: "Anaerobic respiration in yeast producing ethanol and carbon dioxide.", etymology: "From Latin 'fermentum' (yeast/leaven).", funFact: "Essential process used in baking bread and brewing beverages!", score: 10 },
    { word: "Adenosine Triphosphate", definition: "Universal energy currency molecule storing and transferring energy in cells.", etymology: "From adenine + ribose + three phosphate groups.", funFact: "A human body recycles its own weight in ATP every single day!", score: 30 },
    { word: "Mitochondria", definition: "Double-membrane organelle site of aerobic respiration and ATP production.", etymology: "From Greek 'mitos' (thread) + 'chondrion' (grain).", funFact: "Active heart muscle cells contain thousands of mitochondria!", score: 20 }
  ],
  "excretion-humans": [
    { word: "Excretion", definition: "Removal of toxic metabolic waste products and excess substances from body.", etymology: "From Latin 'excretio' (sifting out).", funFact: "Kidneys filter metabolic waste from roughly 180 liters of blood plasma daily!", score: 10 },
    { word: "Urea", definition: "Nitrogenous waste product formed in liver from deamination of excess amino acids.", etymology: "From Greek 'ouron' (urine).", funFact: "Liver converts toxic ammonia into harmless urea before excretion by kidneys.", score: 10 },
    { word: "Nephron", definition: "Microscopic functional filtering unit of kidney.", etymology: "From Greek 'nephros' (kidney).", funFact: "Each human kidney contains roughly one million nephrons!", score: 20 },
    { word: "Glomerulus", definition: "Knot of high-pressure capillaries inside Bowman's capsule driving ultrafiltration.", etymology: "From Latin 'glomus' (ball of yarn).", funFact: "High blood pressure inside glomerulus forces water and small solutes out of blood.", score: 20 },
    { word: "Bowmans Capsule", definition: "Cup-shaped start of nephron collecting glomerular filtrate.", etymology: "Eponymous, named after English surgeon William Bowman (1842).", funFact: "Filters out red blood cells and large proteins, letting glucose and urea pass.", score: 20 },
    { word: "Ultrafiltration", definition: "Filtration under high pressure forcing water and small molecules out of blood into nephron.", etymology: "From Latin 'ultra' (beyond) + 'filtrum' (felt strainer).", funFact: "Produces glomerular filtrate containing water, salts, glucose, and urea.", score: 30 },
    { word: "Selective Reabsorption", definition: "Reuptake of useful substances like all glucose back into blood from nephron tubule.", etymology: "From Latin 'selectus' + 're-absorbere'.", funFact: "100% of glucose is normally reabsorbed in proximal convoluted tubule via active transport.", score: 30 },
    { word: "Dialysis", definition: "Artificial procedure filtering waste products from blood when kidneys fail.", etymology: "From Greek 'dialysis' (dissolution/separation).", funFact: "Dialysis membrane prevents loss of blood cells while removing excess urea.", score: 20 }
  ],
  "coordination-response": [
    { word: "Reflex Arc", definition: "Involuntary rapid automatic nerve pathway bypassing conscious brain decision.", etymology: "From Latin 'reflexus' (bent back) + 'arcus' (bow).", funFact: "Reflex arcs protect tissues from immediate damage, like pulling hand from hot stove!", score: 20 },
    { word: "Sensory Neuron", definition: "Nerve cell transmitting impulses from sensory receptors to central nervous system.", etymology: "From Latin 'sensus' + Greek 'neuron'.", funFact: "Detects stimuli like temperature, pressure, light, and pain.", score: 20 },
    { word: "Motor Neuron", definition: "Nerve cell carrying impulses from CNS to effectors like muscles or glands.", etymology: "From Latin 'motor' (mover) + Neuron.", funFact: "Triggers muscle contraction or hormone secretion.", score: 20 },
    { word: "Synapse", definition: "Microscopic junction between two neurons crossed by chemical neurotransmitters.", etymology: "From Greek 'synapsis' (clasping together).", funFact: "Ensures nerve impulses travel strictly in one direction!", score: 20 },
    { word: "Neurotransmitter", definition: "Chemical signal molecule diffuses across synaptic cleft to transmit impulse.", etymology: "From Greek 'neuron' + Latin 'transmittere'.", funFact: "Dopamine, serotonin, and acetylcholine are key neurotransmitters.", score: 30 },
    { word: "Adrenaline", definition: "Hormone secreted by adrenal glands triggering fight-or-flight response.", etymology: "From Latin 'ad' (near) + 'ren' (kidney).", funFact: "Increases heart rate, dilates airways, and elevates blood glucose rapidly!", score: 20 },
    { word: "Auxin", definition: "Plant hormone controlling cell elongation during phototropism and gravitropism.", etymology: "From Greek 'auxein' (to grow or increase).", funFact: "Auxin accumulates on shaded side of plant shoot causing shade cells to elongate faster!", score: 20 },
    { word: "Phototropism", definition: "Growth response of plant shoot towards light source.", etymology: "From Greek 'phos' (light) + 'tropos' (turning).", funFact: "Shoots show positive phototropism while roots show negative phototropism.", score: 20 }
  ],
  "drugs-medicine": [
    { word: "Antibiotic", definition: "Drug killing or inhibiting growth of bacteria without harming human cells.", etymology: "From Greek 'anti' (against) + 'bios' (life).", funFact: "Antibiotics kill bacteria but are completely ineffective against viral infections!", score: 10 },
    { word: "Penicillin", definition: "First discovered antibiotic produced by Penicillium mold.", etymology: "Eponymous, from Penicillium mold (Latin 'penicillus' paintbrush).", funFact: "Discovered accidentally by Alexander Fleming in 1928 when mold contaminated a petri dish!", score: 20 },
    { word: "Antibiotic Resistance", definition: "Ability of bacteria to survive antibiotic treatment due to natural selection of resistant mutations.", etymology: "From Antibiotic + Latin 'resistentia'.", funFact: "Overusing antibiotics accelerates natural selection of resistant superbug strains like MRSA.", score: 30 },
    { word: "Depressant", definition: "Drug slowing down central nervous system activity and synaptic transmission.", etymology: "From Latin 'deprimere' (press down).", funFact: "Alcohol and heroin are depressants that slow reaction times and speech.", score: 10 },
    { word: "Stimulant", definition: "Drug speeding up central nervous system and increasing neurotransmitter release.", etymology: "From Latin 'stimulare' (to prick/goad).", funFact: "Caffeine and nicotine are common nervous system stimulants.", score: 10 },
    { word: "Addiction", definition: "Chemical or psychological dependence on a drug with compulsion to take it.", etymology: "From Latin 'addictio' (bound to master).", funFact: "Tolerance develops when body requires larger doses to produce same effect.", score: 10 }
  ],
  "reproduction": [
    { word: "Asexual Reproduction", definition: "Process resulting in genetically identical offspring from one single parent.", etymology: "From Greek 'a-' (without) + Sexual.", funFact: "Bacteria use binary fission and potatoes use stem tubers for asexual reproduction.", score: 20 },
    { word: "Sexual Reproduction", definition: "Reproduction involving fusion of two haploid gametes forming genetically unique zygote.", etymology: "From Latin 'sexualis'.", funFact: "Generates genetic variation essential for species survival and evolution.", score: 10 },
    { word: "Gamete", definition: "Haploid sex cell (sperm, egg, pollen, ovule) containing half normal chromosome set.", etymology: "From Greek 'gamete' (spouse).", funFact: "Human gametes carry 23 chromosomes compared to 46 in somatic cells.", score: 10 },
    { word: "Fertilization", definition: "Fusion of male and female gamete nuclei restoring diploid chromosome number.", etymology: "From Latin 'fertiliter' (fruitful).", funFact: "Forming a single-celled diploid zygote.", score: 10 },
    { word: "Menstrual Cycle", definition: "Monthly reproductive cycle in human females preparing uterus for potential pregnancy.", etymology: "From Latin 'mensis' (month) + Greek 'kyklos'.", funFact: "Hormones FSH, LH, estrogen, and progesterone regulate follicle growth and ovulation.", score: 20 },
    { word: "Estrogen", definition: "Female sex hormone repairing uterus lining and driving female secondary sexual characteristics.", etymology: "From Greek 'oistros' (gadfly/frenzy) + '-gen'.", funFact: "Secreted by developing ovary follicles during first half of menstrual cycle.", score: 20 },
    { word: "Progesterone", definition: "Hormone maintaining thick uterine lining for embryo implantation.", etymology: "From 'pro-' (for) + 'gestation' (pregnancy).", funFact: "Secreted by corpus luteum after ovulation.", score: 20 },
    { word: "Placenta", definition: "Organ connecting developing fetus to uterine wall allowing diffusion of oxygen and nutrients.", etymology: "From Latin 'placenta' (flat cake).", funFact: "Prevents direct mixing of maternal and fetal blood while allowing gas diffusion.", score: 20 }
  ],
  "inheritance": [
    { word: "Gene", definition: "Length of DNA coding for specific functional polypeptide protein.", etymology: "From Greek 'genos' (birth/origin).", funFact: "Human genome contains roughly 20,000 protein-coding genes.", score: 10 },
    { word: "Allele", definition: "Alternative form of a gene located at same position on homologous chromosomes.", etymology: "From Greek 'allelon' (of one another).", funFact: "Dominant alleles express phenotype even if only one copy is present.", score: 10 },
    { word: "Homozygous", definition: "Having two identical alleles for a particular gene (e.g. BB or bb).", etymology: "From Greek 'homos' (same) + 'zygon' (yoke).", funFact: "Purebred lines are homozygous for target traits.", score: 20 },
    { word: "Heterozygous", definition: "Having two different alleles for a particular gene (e.g. Bb).", etymology: "From Greek 'heteros' (other) + 'zygon'.", funFact: "Heterozygous carriers carry recessive allele without showing condition.", score: 20 },
    { word: "Genotype", definition: "Genetic allele combination of an organism.", etymology: "From Greek 'genos' + 'typos'.", funFact: "Predicted using Punnett square probability grids.", score: 10 },
    { word: "Phenotype", definition: "Observable physical feature resulting from genotype and environmental interaction.", etymology: "From Greek 'phainein' (to show) + 'typos'.", funFact: "Flamingos turn pink due to carotenoid diet pigment phenotype interaction!", score: 10 },
    { word: "Punnett Square", definition: "Grid diagram used to predict allele genotype combinations in genetic crosses.", etymology: "Eponymous, named after English geneticist Reginald Punnett (1905).", funFact: "Calculates offspring phenotype ratios.", score: 20 },
    { word: "Sex Chromosome", definition: "Pair of chromosomes determining biological sex (XX in females, XY in males).", etymology: "From Sex + Chromosome.", funFact: "Y chromosome carries SRY gene triggering male gonad development.", score: 20 }
  ],
  "variation-selection": [
    { word: "Continuous Variation", definition: "Variation showing complete range of intermediate phenotypes controlled by many genes.", etymology: "From Latin 'continuus' (uninterrupted) + 'variatio'.", funFact: "Human height and body mass display continuous variation producing bell curve graphs.", score: 20 },
    { word: "Discontinuous Variation", definition: "Variation with distinct non-overlapping categories controlled by single gene.", etymology: "From Latin 'dis-' + Continuous.", funFact: "ABO blood groups and tongue rolling are classic discontinuous traits.", score: 20 },
    { word: "Mutation", definition: "Random change in DNA base sequence creating new alleles.", etymology: "From Latin 'mutatio' (change).", funFact: "Mutations are ultimate source of all novel genetic variation in evolution!", score: 10 },
    { word: "Natural Selection", definition: "Process where organisms with advantageous adaptations survive and reproduce passing on alleles.", etymology: "Formulated by Charles Darwin in 1859.", funFact: "Peppered moth color changed during Industrial Revolution due to soot pollution natural selection!", score: 20 },
    { word: "Adaptation", definition: "Inherited feature increasing organism's chance of survival and reproduction in habitat.", etymology: "From Latin 'adaptare' (fit to).", funFact: "Camels store fat in humps to minimize body heat trapping.", score: 10 },
    { word: "Selective Breeding", definition: "Artificial selection by humans breeding organisms with desired traits over generations.", etymology: "From Latin 'selectus' + Old English 'bredan'.", funFact: "Produced modern wheat, domesticated dogs, and high-yield dairy cows.", score: 20 }
  ],
  "organisms-environment": [
    { word: "Ecosystem", definition: "Unit containing all interacting organisms and non-living environment in an area.", etymology: "From Greek 'oikos' (home) + 'systema'.", funFact: "Ponds, forests, coral reefs, and deserts are distinct ecosystems.", score: 10 },
    { word: "Food Chain", definition: "Linear diagram showing energy transfer from producer to consumers.", etymology: "From Old English 'foda' + Latin 'catena'.", funFact: "Arrows in food chain represent direction of energy and biomass transfer!", score: 10 },
    { word: "Food Web", definition: "Network of interconnected food chains reflecting true ecosystem feeding relationships.", etymology: "From Food + Old English 'webb'.", funFact: "More complex food webs provide higher ecological stability against species loss.", score: 10 },
    { word: "Trophic Level", definition: "Position of an organism in a food chain or web.", etymology: "From Greek 'trophe' (nourishment).", funFact: "Producers occupy trophic level 1; herbivores occupy trophic level 2.", score: 20 },
    { word: "Producer", definition: "Autotrophic organism making its own organic nutrients using sunlight.", etymology: "From Latin 'producere' (bring forth).", funFact: "Green plants and algae form base of almost all food webs.", score: 10 },
    { word: "Decomposer", definition: "Organism like fungus or bacterium breaking down dead organic matter releasing minerals.", etymology: "From French 'décomposer'.", funFact: "Recycles carbon and nitrogen back into soil and atmosphere.", score: 10 },
    { word: "Carbon Cycle", definition: "Biogeochemical cycle circulating carbon through photosynthesis, respiration, combustion, and decomposition.", etymology: "From Latin 'carbo' + Greek 'kyklos'.", funFact: "Fossil fuels are carbon reservoirs locked underground for millions of years.", score: 20 },
    { word: "Nitrogen Fixation", definition: "Conversion of inert atmospheric N2 gas into reactive nitrates by bacteria.", etymology: "From Greek 'nitron' + Latin 'fixus'.", funFact: "Rhizobium bacteria in legume root nodules fix nitrogen symbiotically!", score: 30 }
  ],
  "human-ecosystem-influence": [
    { word: "Eutrophication", definition: "Nutrient enrichment of water bodies causing algal blooms, light blockage, and oxygen depletion.", etymology: "From Greek 'eu' (well) + 'trephein' (nourish).", funFact: "Leached synthetic fertilizers trigger aquatic oxygen depletion killing fish.", score: 30 },
    { word: "Deforestation", definition: "Clearing of forests causing habitat loss, soil erosion, and increased atmospheric CO2.", etymology: "From Latin 'de-' + 'foresta'.", funFact: "Rainforests absorb vast amounts of CO2 acting as global carbon sinks.", score: 20 },
    { word: "Global Warming", definition: "Increase in Earth's average surface temperature caused by greenhouse gas emissions.", etymology: "From Latin 'globus' + Old English 'wearm'.", funFact: "Traps infrared heat radiation re-radiated from Earth's surface.", score: 10 },
    { word: "Biodiversity", definition: "Number of different species and genetic variation present in an ecosystem.", etymology: "From Greek 'bios' (life) + Diversity.", funFact: "High biodiversity enhances ecosystem resilience against disease and environmental change.", score: 20 },
    { word: "Conservation", definition: "Protection and management of natural habitats and endangered species.", etymology: "From Latin 'conservatio' (preserving).", funFact: "Seed banks store dormant seeds to preserve plant species from extinction.", score: 10 },
    { word: "Recycling", definition: "Processing used waste materials into new products to reduce landfill and resource depletion.", etymology: "From Re- + Greek 'kyklos'.", funFact: "Recycling aluminum uses 95% less energy than refining raw bauxite ore!", score: 10 }
  ],
  "biotechnology-genetic-mod": [
    { word: "Biotechnology", definition: "Application of biological organisms or enzymes to industrial production and medicine.", etymology: "From Greek 'bios' + 'techne' (art/craft) + 'logos'.", funFact: "Yeast bread baking and bacterial insulin production are forms of biotechnology!", score: 20 },
    { word: "Genetic Engineering", definition: "Direct modification of an organism's genome using biotechnology tools.", etymology: "From Latin 'geneticus' + 'ingenium' (cleverness).", funFact: "Enables transfer of genes between entirely different species!", score: 20 },
    { word: "Recombinant DNA", definition: "DNA formed by joining genetic material from two different organisms.", etymology: "From Latin 're-' + 'combinare'.", funFact: "Human insulin gene inserted into bacterial plasmid produces human insulin recombinantly.", score: 30 },
    { word: "Restriction Enzyme", definition: "Enzyme cutting DNA at specific base pair recognition sequences leaving sticky ends.", etymology: "From Latin 'restrictio' + Enzyme.", funFact: "Discovered as bacterial defense mechanisms against invading bacteriophage viruses!", score: 30 },
    { word: "DNA Ligase", definition: "Enzyme joining cut strands of DNA together by reforming sugar-phosphate backbone bonds.", etymology: "From Latin 'ligare' (to bind/tie) + '-ase'.", funFact: "Acts as molecular glue uniting human gene inserts with plasmid vectors.", score: 30 },
    { word: "Plasmid", definition: "Small circular bacterial DNA strand used as vector to carry foreign genes.", etymology: "From Greek 'plasma' + '-id'.", funFact: "Bacterial plasmids replicate independently of main bacterial chromosome.", score: 20 },
    { word: "Fermenter", definition: "Vessel providing optimal temperature, pH, and oxygen for industrial microorganism growth.", etymology: "From Latin 'fermentum'.", funFact: "Used to produce mass quantities of penicillin antibiotic and human insulin.", score: 20 },
    { word: "Transgenic Organism", definition: "Organism containing a gene transferred from another species via genetic engineering.", etymology: "From Latin 'trans' (across) + 'gen' (gene).", funFact: "Golden Rice is a transgenic crop engineered to synthesize vitamin A beta-carotene.", score: 30 }
  ],
  "cell-biology": [
    { word: "Cell Membrane", definition: "Selectively permeable phospholipid bilayer regulating substance transport into and out of cells.", etymology: "From Old English 'cell' (small room) + Latin 'membrana' (skin or parchment).", funFact: "The cell membrane acts as a fluid mosaic embedded with protein channels!", score: 20 },
    { word: "Cell Wall", definition: "Rigid outer layer surrounding plant, fungal, and bacterial cells for structural support.", etymology: "From Old English 'cell' + Old English 'weall' (rampart/wall).", funFact: "Plant cell walls are made mainly of strong cellulose fibers!", score: 10 },
    { word: "Plasma Membrane", definition: "Outer membrane of a cell that encloses cytoplasm and organelles.", etymology: "From Greek 'plasma' (something molded) + Latin 'membrana' (skin).", funFact: "It maintains cellular homeostasis by controlling molecular entry.", score: 20 },
    { word: "Mitochondria", definition: "Double-membrane organelle that generates ATP through cellular respiration.", etymology: "From Greek 'mitos' (thread) + 'chondrion' (granule or grain).", funFact: "Mitochondria have their own distinct circular DNA separate from the cell nucleus!", score: 20 },
    { word: "Ribosome", definition: "Molecular machine made of RNA and proteins that synthesizes polypeptides.", etymology: "From 'ribo' (ribonucleic acid) + Greek 'soma' (body).", funFact: "A single active human cell can contain up to 10 million ribosomes!", score: 20 },
    { word: "Chloroplast", definition: "Organelle in plant cells that converts solar energy into chemical sugars.", etymology: "From Greek 'chloros' (pale green) + 'plastos' (formed or molded).", funFact: "Chloroplasts originated through endosymbiosis over 1.5 billion years ago.", score: 20 },
    { word: "Cytoplasm", definition: "Jelly-like cytosol filling the interior of a cell around organelles.", etymology: "From Greek 'kytos' (hollow vessel/cell) + 'plasma' (something molded).", funFact: "About 80% of cytoplasm consists of water and dissolved ions.", score: 10 },
    { word: "Lysosome", definition: "Membrane-bound sac containing hydrolytic enzymes to break down waste.", etymology: "From Greek 'lysis' (dissolution or loosening) + 'soma' (body).", funFact: "Lysosomes are known as the cellular garbage disposal units.", score: 20 },
    { word: "Endoplasmic Reticulum", definition: "Network of internal membranes involved in protein synthesis and lipid metabolism.", etymology: "From Greek 'endon' (within) + 'plasma' (molded material) + Latin 'reticulum' (little net).", funFact: "Rough ER is studded with ribosomes, whereas smooth ER synthesizes lipids.", score: 20 },
    { word: "Vacuole", definition: "Large central storage organelle holding water and cell sap in plants.", etymology: "From Latin 'vacuus' (empty) + '-ole' (small diminutive suffix).", funFact: "In mature plant cells, the central vacuole can take up to 90% of total cell volume!", score: 10 },
    { word: "Nucleolus", definition: "Dense region within the nucleus where ribosomal RNA is transcribed.", etymology: "From Latin 'nucleolus' (little kernel or small nucleus).", funFact: "It disappears during mitosis and reassembles during telophase.", score: 20 },
    { word: "Nucleus", definition: "Central organelle housing genomic DNA and controlling cell operations.", etymology: "From Latin 'nucleus' (kernel, core, or nut).", funFact: "The nucleus was the first organelle discovered, described by Antonie van Leeuwenhoek.", score: 10 },
    { word: "Golgi Apparatus", definition: "Organelle that modifies, sorts, and packages proteins for secretion.", etymology: "Eponymous, named after Italian physician Camillo Golgi (1898) + Latin 'apparatus' (equipment).", funFact: "Named after Camillo Golgi who discovered it using silver stain in 1898.", score: 20 }
  ],
  "genetics-dna": [
    { word: "DNA Polymerase", definition: "Enzyme responsible for forming new copies of DNA during replication.", etymology: "From DNA + Greek 'polys' (many) + 'meros' (part) + '-ase'.", funFact: "DNA polymerase proofreads newly built DNA strands for accuracy!", score: 30 },
    { word: "Messenger RNA", definition: "Single-stranded RNA molecule carrying genetic code from DNA to ribosomes.", etymology: "From English 'messenger' + Ribonucleic Acid.", funFact: "mRNA acts as the blueprint for protein synthesis during translation.", score: 20 },
    { word: "Double Helix", definition: "Twisted-ladder molecular structure of double-stranded DNA.", etymology: "From Latin 'duplus' (double) + Greek 'helix' (spiral).", funFact: "Discovered by Watson, Crick, and Franklin in 1953!", score: 20 },
    { word: "Base Pair", definition: "Pair of complementary nitrogenous bases in DNA or RNA (A-T, C-G).", etymology: "From Latin 'basis' (foundation) + Old French 'paire'.", funFact: "Adenine pairs with Thymine, and Cytosine pairs with Guanine.", score: 20 },
    { word: "Nucleotide", definition: "Basic structural subunit of DNA and RNA composed of base, sugar, and phosphate.", etymology: "From Latin 'nucleus' (kernel) + '-ide' (chemical compound suffix).", funFact: "Human DNA contains over 3 billion nucleotide base pairs!", score: 20 },
    { word: "Allele", definition: "One of two or more alternative forms of a gene arising by mutation.", etymology: "Shortened from German 'allelomorph', from Greek 'allelon' + 'morphe'.", funFact: "Blood type ABO alleles determine human blood cell surface antigens.", score: 10 },
    { word: "Chromosome", definition: "Threadlike structure of nucleic acids and protein carrying genetic info.", etymology: "From Greek 'chroma' (color) + 'soma' (body).", funFact: "Humans have 23 pairs of chromosomes, totaling 46 per cell.", score: 20 },
    { word: "Transcription", definition: "Synthesis of an RNA strand from a DNA template by RNA polymerase.", etymology: "From Latin 'transcribere' (to write over or copy across).", funFact: "mRNA transcription occurs inside the cell nucleus of eukaryotes.", score: 30 }
  ],
  "photosynthesis-ecology": [
    { word: "Calvin Cycle", definition: "Light-independent reactions of photosynthesis where carbon dioxide is fixed into glucose.", etymology: "Eponymous, named after Melvin Calvin + Greek 'kyklos' (circle).", funFact: "The Calvin Cycle occurs inside the stroma of chloroplasts!", score: 20 },
    { word: "Chlorophyll", definition: "Green pigment in plants that absorbs light energy for photosynthesis.", etymology: "From Greek 'chloros' (pale green) + 'phyllon' (leaf).", funFact: "Chlorophyll absorbs blue and red wavelengths, reflecting green light to our eyes.", score: 20 },
    { word: "Ecosystem", definition: "Biological community of interacting organisms and their physical environment.", etymology: "From Greek 'oikos' (home/dwelling) + 'systema' (organized whole).", funFact: "Coral reefs support 25% of all marine life despite covering under 1% of ocean floor.", score: 10 }
  ],
  "anatomy-physiology": [
    { word: "Neuron", definition: "Specialized cell transmitting electrical impulse signals throughout the nervous system.", etymology: "From Greek 'neuron' (nerve, tendon, or cord).", funFact: "Information travels along neurons at speeds up to 268 miles per hour!", score: 10 },
    { word: "Hemoglobin", definition: "Iron-containing protein in red blood cells that transports oxygen.", etymology: "From Greek 'haima' (blood) + Latin 'globus' (ball/sphere).", funFact: "A single red blood cell contains roughly 270 million hemoglobin molecules!", score: 20 },
    { word: "Homeostasis", definition: "State of steady internal physical and chemical conditions maintained by living systems.", etymology: "From Greek 'homios' (similar/same) + 'stasis' (standing still).", funFact: "Sweating and shivering are automatic homeostatic mechanisms for temperature control.", score: 30 }
  ],
  "chemistry-periodic": [
    { word: "Covalent Bond", definition: "Chemical bond formed by the sharing of electron pairs between atoms.", etymology: "From 'co-' (jointly) + 'valence' (combining power).", funFact: "Water molecules are held together by strong covalent hydrogen-oxygen bonds.", score: 10 },
    { word: "Polymer", definition: "Large molecule composed of repeated monomer subunits linked together.", etymology: "From Greek 'polys' (many) + 'meros' (part).", funFact: "DNA, proteins, cellulose, and plastics are all polymers!", score: 10 },
    { word: "Catalyst", definition: "Substance that increases reaction rate without being consumed.", etymology: "From Greek 'katalysis' (dissolution).", funFact: "Enzymes are biological catalysts that speed up biochemical reactions millions of times.", score: 20 }
  ],
  "physics-mechanics": [
    { word: "Momentum", definition: "Product of an object's mass and its velocity.", etymology: "From Latin 'momentum' (movement, impulse, or turning power).", funFact: "Conservation of momentum explains how rocket propulsion works in vacuum.", score: 10 },
    { word: "Velocity", definition: "Speed of an object in a specified direction.", etymology: "From Latin 'velocitas' (swiftness or speed).", funFact: "Terminal velocity is reached when air resistance equals gravitational pull.", score: 10 },
    { word: "Acceleration", definition: "Rate of change of velocity per unit of time.", etymology: "From Latin 'accelerare' (to hasten or speed up).", funFact: "Earth's gravitational acceleration at sea level is approximately 9.8 m/s².", score: 10 }
  ],
  "astronomy-space": [
    { word: "Supernova", definition: "Cataclysmic explosion of a massive dying star.", etymology: "From Latin 'super' (above/beyond) + 'nova' (new star).", funFact: "A supernova brief flash can outshine an entire galaxy of billions of stars!", score: 20 },
    { word: "Nebula", definition: "Interstellar cloud of dust, hydrogen, helium and ionized gases.", etymology: "From Latin 'nebula' (mist, cloud, or fog).", funFact: "Nebulae are stellar nurseries where new stars are born.", score: 20 },
    { word: "Galaxy", definition: "Massive gravitationally bound system of stars, gas, and dark matter.", etymology: "From Greek 'galaxias' (milky circle or milky way).", funFact: "The observable universe contains an estimated 2 trillion galaxies!", score: 10 }
  ],
  "reproduction-plants": [
    { word: "Pollination", definition: "Transfer of pollen grains from anther to stigma in flowering plants.", etymology: "From Latin 'pollen' (fine flour or dust).", funFact: "Wind, bees, butterflies, birds, and bats are crucial plant pollinators!", score: 10 },
    { word: "Pollen", definition: "Microscopic grains containing male gametophytes of seed plants.", etymology: "From Latin 'pollen' (fine powder or flour).", funFact: "Fossilized pollen grains can survive intact for millions of years!", score: 10 },
    { word: "Stamen", definition: "Male reproductive organ of a flower consisting of anther and filament.", etymology: "From Latin 'stamen' (warp thread or fiber).", funFact: "The number of stamens varies widely across different plant families.", score: 10 },
    { word: "Pistil", definition: "Female reproductive organ of a flower comprising stigma, style, and ovary.", etymology: "From Latin 'pistillum' (pestle), describing its shape.", funFact: "A pistil can consist of one or multiple fused carpels.", score: 10 }
  ]
};

export const GENERAL_SCIENCE_WORDS: OfflineWordInfo[] = [
  { word: "Hypothesis", definition: "Testable proposed explanation for an observed phenomenon.", etymology: "From Greek 'hypo' (under) + 'thesis' (placing/statement).", funFact: "A scientific hypothesis must be capable of being proven wrong (falsifiable).", score: 10 },
  { word: "Experiment", definition: "Controlled procedure carried out to discover, test, or demonstrate a truth.", etymology: "From Latin 'experimentum' (trial or test).", funFact: "Double-blind experiments prevent researcher bias from skewing test results.", score: 10 },
  { word: "Observation", definition: "Act of gathering evidence using human senses or scientific instruments.", etymology: "From Latin 'observare' (watch or attend to).", funFact: "Galileo's telescopic observations of Jupiter's moons proved not everything orbits Earth!", score: 10 },
  { word: "Variable", definition: "Factor or element that can change during an experiment.", etymology: "From Latin 'variabilis' (changeable).", funFact: "Controlled experiments isolate a single independent variable at a time.", score: 10 },
  { word: "Theory", definition: "Well-substantiated explanation of some aspect of the natural world based on empirical facts.", etymology: "From Greek 'theoria' (contemplation or spectacle).", funFact: "In science, a 'theory' is the highest level of certainty, not just a guess!", score: 10 }
];

export function getOfflineWordList(topicKey?: string): OfflineWordInfo[] {
  if (!topicKey) return GENERAL_SCIENCE_WORDS;
  const lower = topicKey.toLowerCase();
  const norm = lower.replace(/[^a-z0-9]/g, "");

  if (norm.includes("characteristic") || norm.includes("classificat") || norm.includes("binomial") || norm.includes("dichotomous")) {
    return SCIENCE_DICTIONARIES["characteristics-classification"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("organisation") || norm.includes("organization") || (norm.includes("organism") && !norm.includes("environment"))) {
    return SCIENCE_DICTIONARIES["organisation-organism"] || SCIENCE_DICTIONARIES["cell-biology"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("movement") || norm.includes("cellmovement") || (norm.includes("cell") && (norm.includes("into") || norm.includes("out")))) {
    return SCIENCE_DICTIONARIES["cell-movement"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("molecule") || norm.includes("biomolecule") || norm.includes("carbohydrate") || norm.includes("protein")) {
    return SCIENCE_DICTIONARIES["biological-molecules"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("enzyme") || norm.includes("catalys") || norm.includes("activesite")) {
    return SCIENCE_DICTIONARIES["enzymes"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("plantnutrition") || (norm.includes("plant") && norm.includes("nutrit"))) {
    return SCIENCE_DICTIONARIES["plant-nutrition"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("humannutrition") || (norm.includes("human") && norm.includes("nutrit")) || norm.includes("digest")) {
    return SCIENCE_DICTIONARIES["human-nutrition"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("transportinplant") || (norm.includes("transport") && norm.includes("plant")) || norm.includes("transpiration")) {
    return SCIENCE_DICTIONARIES["transport-plants"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("transportinanimal") || (norm.includes("transport") && (norm.includes("animal") || norm.includes("circulat") || norm.includes("blood")))) {
    return SCIENCE_DICTIONARIES["transport-animals"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("disease") || norm.includes("immun") || norm.includes("pathogen") || norm.includes("vaccin")) {
    return SCIENCE_DICTIONARIES["diseases-immunity"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("gasexchange") || norm.includes("alveoli") || norm.includes("lung") || norm.includes("ventilation")) {
    return SCIENCE_DICTIONARIES["gas-exchange"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("respiration") || norm.includes("aerobic") || norm.includes("anaerobic")) {
    return SCIENCE_DICTIONARIES["respiration"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("excretion") || norm.includes("kidney") || norm.includes("nephron") || norm.includes("urea")) {
    return SCIENCE_DICTIONARIES["excretion-humans"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("coordination") || norm.includes("response") || norm.includes("nervous") || norm.includes("reflex") || norm.includes("hormone")) {
    return SCIENCE_DICTIONARIES["coordination-response"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("drug") || norm.includes("pharmacolog") || norm.includes("antibiotic")) {
    return SCIENCE_DICTIONARIES["drugs-medicine"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("reproduction") || norm.includes("gamete") || norm.includes("fertiliz")) {
    if (norm.includes("plant")) return SCIENCE_DICTIONARIES["reproduction-plants"] || SCIENCE_DICTIONARIES["reproduction"];
    return SCIENCE_DICTIONARIES["reproduction"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("inheritance") || norm.includes("heredit") || norm.includes("genetics")) {
    return SCIENCE_DICTIONARIES["inheritance"] || SCIENCE_DICTIONARIES["genetics-dna"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("variation") || norm.includes("naturalselection") || norm.includes("evolution")) {
    return SCIENCE_DICTIONARIES["variation-selection"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("environment") || norm.includes("foodchain") || norm.includes("foodweb") || norm.includes("trophic")) {
    return SCIENCE_DICTIONARIES["organisms-environment"] || SCIENCE_DICTIONARIES["photosynthesis-ecology"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("humaninfluence") || norm.includes("ecosystem") || norm.includes("pollution") || norm.includes("deforestation")) {
    return SCIENCE_DICTIONARIES["human-ecosystem-influence"] || GENERAL_SCIENCE_WORDS;
  }
  if (norm.includes("biotechnology") || norm.includes("geneticmodification") || norm.includes("geneticengineer") || norm.includes("gmo") || norm.includes("recombinant")) {
    return SCIENCE_DICTIONARIES["biotechnology-genetic-mod"] || GENERAL_SCIENCE_WORDS;
  }

  for (const [key, list] of Object.entries(SCIENCE_DICTIONARIES)) {
    const cleanKey = key.replace(/[^a-z0-9]/g, "");
    if (norm.includes(cleanKey) || cleanKey.includes(norm)) {
      return list;
    }
  }

  return GENERAL_SCIENCE_WORDS;
}

export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
  "characteristics-classification": "1. Characteristics & Classification of Organisms",
  "organisation-organism": "2. Organisation of the Organism",
  "cell-movement": "3. Movement Into & Out of Cells",
  "biological-molecules": "4. Biological Molecules",
  "enzymes": "5. Enzymes & Catalysis",
  "plant-nutrition": "6. Plant Nutrition & Photosynthesis",
  "human-nutrition": "7. Human Nutrition & Digestion",
  "transport-plants": "8. Transport in Plants",
  "transport-animals": "9. Transport in Animals & Circulation",
  "diseases-immunity": "10. Diseases & Immunity",
  "gas-exchange": "11. Gas Exchange in Humans",
  "respiration": "12. Respiration & Energy",
  "excretion-humans": "13. Excretion in Humans",
  "coordination-response": "14. Coordination & Response",
  "drugs-medicine": "15. Drugs & Pharmacology",
  "reproduction": "16. Reproduction in Organisms",
  "inheritance": "17. Inheritance & Genetics",
  "variation-selection": "18. Variation & Natural Selection",
  "organisms-environment": "19. Organisms & Their Environment",
  "human-ecosystem-influence": "20. Human Influences on Ecosystems",
  "biotechnology-genetic-mod": "21. Biotechnology & Genetic Modification",
  "cell-biology": "Cell Biology & Organelles",
  "genetics-dna": "Genetics & DNA",
  "photosynthesis-ecology": "Ecology & Photosynthesis",
  "anatomy-physiology": "Human Anatomy & Physiology",
  "chemistry-periodic": "Chemistry & Periodic Table",
  "physics-mechanics": "Physics & Mechanics",
  "astronomy-space": "Astronomy & Space",
  "reproduction-plants": "Plant Reproduction & Botany"
};

export function findWordInDictionaries(rawInput: string): { wordInfo: OfflineWordInfo; categoryKey: string } | null {
  const clean = rawInput.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!clean) return null;

  for (const [catKey, list] of Object.entries(SCIENCE_DICTIONARIES)) {
    for (const item of list) {
      const dictClean = item.word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (
        dictClean === clean ||
        (clean.length >= 4 && (clean.includes(dictClean) || dictClean.includes(clean)))
      ) {
        return { wordInfo: item, categoryKey: catKey };
      }
    }
  }
  return null;
}

export function validateStudentWordOffline(topic: string, rawInput: string, usedWords: string[]) {
  const cleanInput = rawInput.trim().toLowerCase().replace(/\s+/g, " ");

  if (!cleanInput || cleanInput.length < 2) {
    return {
      studentValidation: {
        isValid: false,
        reason: "Word is too short or empty. Please enter a valid science term.",
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  const isAlreadyUsed = usedWords.some((w) => {
    const norm = w.trim().toLowerCase().replace(/\s+/g, " ");
    return norm === cleanInput;
  });

  if (isAlreadyUsed) {
    return {
      studentValidation: {
        isValid: false,
        reason: `"${rawInput.trim()}" was already played in this match! Try another term.`,
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  const topicWords = getOfflineWordList(topic);

  const exactTopicMatch = topicWords.find((w) => {
    const dictLower = w.word.toLowerCase();
    const cleanDictLower = dictLower.replace(/[^a-z0-9]/g, "");
    const cleanUser = cleanInput.replace(/[^a-z0-9]/g, "");
    return dictLower === cleanInput || cleanDictLower === cleanUser;
  });

  if (exactTopicMatch) {
    return {
      studentValidation: {
        isValid: true,
        reason: `Valid term for ${topic}!`,
        normalizedWord: exactTopicMatch.word,
        definition: exactTopicMatch.definition,
        etymology: exactTopicMatch.etymology,
        score: exactTopicMatch.score || 20,
        matchedBingoTileId: exactTopicMatch.word.toLowerCase()
      }
    };
  }

  const partialTopicMatch = topicWords.find((w) => {
    const dictLower = w.word.toLowerCase();
    return cleanInput.includes(dictLower) || dictLower.includes(cleanInput);
  });

  if (partialTopicMatch) {
    return {
      studentValidation: {
        isValid: true,
        reason: `Valid term for ${topic}!`,
        normalizedWord: partialTopicMatch.word,
        definition: partialTopicMatch.definition,
        etymology: partialTopicMatch.etymology,
        score: partialTopicMatch.score || 20,
        matchedBingoTileId: partialTopicMatch.word.toLowerCase()
      }
    };
  }

  const wrongCategoryMatch = findWordInDictionaries(rawInput);
  if (wrongCategoryMatch) {
    const wrongCatName = CATEGORY_DISPLAY_NAMES[wrongCategoryMatch.categoryKey] || wrongCategoryMatch.categoryKey;
    return {
      studentValidation: {
        isValid: false,
        reason: `❌ "${wrongCategoryMatch.wordInfo.word}" belongs to ${wrongCatName}, NOT ${topic}! Please enter a term directly related to ${topic}.`,
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  const generalMatch = GENERAL_SCIENCE_WORDS.find((w) => w.word.toLowerCase() === cleanInput);
  if (generalMatch) {
    if (topic.toLowerCase().includes("general")) {
      return {
        studentValidation: {
          isValid: true,
          reason: "Valid general science term!",
          normalizedWord: generalMatch.word,
          definition: generalMatch.definition,
          etymology: generalMatch.etymology,
          score: generalMatch.score || 10,
          matchedBingoTileId: generalMatch.word.toLowerCase()
        }
      };
    } else {
      return {
        studentValidation: {
          isValid: false,
          reason: `❌ "${generalMatch.word}" is a generic process term, not a specific concept for ${topic}. Please enter a term directly related to ${topic}.`,
          normalizedWord: rawInput.trim(),
          definition: "",
          etymology: "",
          score: 0
        }
      };
    }
  }

  const isPresetTopic = Object.keys(CATEGORY_DISPLAY_NAMES).some((catKey) => {
    const catName = CATEGORY_DISPLAY_NAMES[catKey].toLowerCase();
    const topicLower = topic.toLowerCase();
    return catName.includes(topicLower) || topicLower.includes(catKey.replace("-", " "));
  });

  if (!isPresetTopic && cleanInput.length >= 3 && /^[a-z\s\-]+$/i.test(cleanInput)) {
    const formattedWord = rawInput
      .trim()
      .split(/\s+/)
      .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
      .join(" ");

    return {
      studentValidation: {
        isValid: true,
        reason: `Valid term for custom topic "${topic}"!`,
        normalizedWord: formattedWord,
        definition: `Scientific concept relating to ${topic}.`,
        etymology: `Derived from scientific root terminology in ${topic}.`,
        score: 15,
        matchedBingoTileId: cleanInput.replace(/\s+/g, "-")
      }
    };
  }

  const sampleTerms = topicWords.slice(0, 4).map((w) => w.word).join(", ");
  return {
    studentValidation: {
      isValid: false,
      reason: `❌ "${rawInput.trim()}" was not recognized for topic "${topic}". Try terms like: ${sampleTerms || "key scientific terms"}.`,
      normalizedWord: rawInput.trim(),
      definition: "",
      etymology: "",
      score: 0
    }
  };
}

export function getAiTurnOffline(topic: string, usedWords: string[]) {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/\s+/g, " "));

  const available = dictionary.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (available.length > 0) {
    const chosen = available[Math.floor(Math.random() * available.length)];
    return {
      word: chosen.word,
      definition: chosen.definition,
      etymology: chosen.etymology,
      funFact: chosen.funFact,
      score: chosen.score,
      matchedBingoTileId: chosen.word.toLowerCase()
    };
  }

  const availableGeneral = GENERAL_SCIENCE_WORDS.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));
  if (availableGeneral.length > 0) {
    const chosen = availableGeneral[Math.floor(Math.random() * availableGeneral.length)];
    return {
      word: chosen.word,
      definition: chosen.definition,
      etymology: chosen.etymology,
      funFact: chosen.funFact,
      score: chosen.score,
      matchedBingoTileId: chosen.word.toLowerCase()
    };
  }

  return {
    word: "Bioenergetics",
    definition: "Study of energy flow and transformation within living biological systems.",
    etymology: "From Greek 'bios' (life) + 'energeia' (activity/work).",
    funFact: "Bioenergetics governs metabolic rates and cellular respiration efficiency.",
    score: 25,
    matchedBingoTileId: "bioenergetics"
  };
}

export function generateBingoTilesOffline(topic: string) {
  const wordList = getOfflineWordList(topic);
  let pool = [...wordList];
  if (pool.length < 25) {
    pool = [...pool, ...GENERAL_SCIENCE_WORDS];
  }
  
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  
  const tiles = [];
  for (let i = 0; i < 25; i++) {
    const item = shuffled[i % shuffled.length];
    tiles.push({
      id: `tile-${i + 1}`,
      label: item.word,
      targetTermOrCategory: item.word,
      description: item.definition
    });
  }
  return tiles;
}

export function getOfflineHint(topic: string, usedWords: string[]): string {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/\s+/g, " "));
  const unused = dictionary.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (unused.length > 0) {
    const word = unused[Math.floor(Math.random() * unused.length)];
    return `Hint: Think about a term starting with '${word.word.charAt(0)}' related to: ${word.definition}`;
  }

  return `Hint: Enter terms related to cellular structure, genetics, metabolism, or biological pathways in ${topic}.`;
}
