export interface OfflineWordInfo {
  word: string;
  definition: string;
  etymology: string;
  funFact: string;
  score: number;
}

export const SCIENCE_DICTIONARIES: Record<string, OfflineWordInfo[]> = {
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
    { word: "Endoplasmic", definition: "Network of membranes involved in protein synthesis and lipid metabolism.", etymology: "From Greek 'endon' (within) + 'plasma' (molded material).", funFact: "Rough ER is studded with ribosomes, whereas smooth ER synthesizes lipids.", score: 20 },
    { word: "Vacuole", definition: "Large central storage organelle holding water and cell sap in plants.", etymology: "From Latin 'vacuus' (empty) + '-ole' (small diminutive suffix).", funFact: "In mature plant cells, the central vacuole can take up to 90% of total cell volume!", score: 10 },
    { word: "Nucleolus", definition: "Dense region within the nucleus where ribosomal RNA is transcribed.", etymology: "From Latin 'nucleolus' (little kernel or small nucleus).", funFact: "It disappears during mitosis and reassembles during telophase.", score: 20 },
    { word: "Nucleus", definition: "Central organelle housing genomic DNA and controlling cell operations.", etymology: "From Latin 'nucleus' (kernel, core, or nut).", funFact: "The nucleus was the first organelle discovered, described by Antonie van Leeuwenhoek.", score: 10 },
    { word: "Golgi Apparatus", definition: "Organelle that modifies, sorts, and packages proteins for secretion.", etymology: "Eponymous, named after Italian physician Camillo Golgi (1898) + Latin 'apparatus' (equipment).", funFact: "Named after Camillo Golgi who discovered it using silver stain in 1898.", score: 20 },
    { word: "Golgi", definition: "Organelle that modifies, sorts, and packages proteins for secretion.", etymology: "Eponymous, named after Italian physician Camillo Golgi (1898).", funFact: "Named after Camillo Golgi who discovered it using silver stain in 1898.", score: 10 },
    { word: "Cytoskeleton", definition: "Protein filament network providing mechanical support and intracellular transport.", etymology: "From Greek 'kytos' (cell) + 'skeleton' (dried body).", funFact: "Motor proteins literally walk along cytoskeleton tracks pulling cellular cargo!", score: 30 },
    { word: "Apoptosis", definition: "Programmed cellular suicide for development and tissue homeostasis.", etymology: "From Greek 'apo-' (off/away) + 'ptosis' (falling off).", funFact: "Human embryos lose webbing between fingers before birth via apoptosis.", score: 30 },
    { word: "Osmosis", definition: "Passive movement of water molecules across a selectively permeable membrane.", etymology: "From Greek 'osmos' (a push or impulse).", funFact: "Osmotic pressure is what keeps plant leaves firm and standing upright.", score: 20 },
    { word: "Mitosis", definition: "Process of somatic cell nuclear division producing identical daughter cells.", etymology: "From Greek 'mitos' (warp thread) describing threadlike chromosomes.", funFact: "Mitosis takes about 1 to 2 hours in typical human cells.", score: 10 },
    { word: "Meiosis", definition: "Specialized cell division producing four genetically unique haploid gametes.", etymology: "From Greek 'meiosis' (lessening or diminution).", funFact: "Crossing over during meiosis generates over 8 million genetic combinations in humans!", score: 20 },
    { word: "Active Transport", definition: "Movement of substances across cell membranes against a concentration gradient requiring ATP.", etymology: "From Latin 'activus' (doing/acting) + 'trans-portare' (carry across).", funFact: "Active transport uses up to 40% of a cell's total resting energy supply!", score: 20 },
    { word: "Passive Transport", definition: "Movement of biochemicals across cell membranes without requiring cellular energy.", etymology: "From Latin 'passivus' (capable of suffering) + 'trans-portare'.", funFact: "Diffusion and osmosis are primary examples of passive transport.", score: 20 },
    { word: "Phagocytosis", definition: "Cellular eating process where white blood cells engulf solid pathogens.", etymology: "From Greek 'phagein' (to eat) + 'kytos' (cell) + '-osis' (process).", funFact: "A single macrophage can devour up to 100 bacteria before dying.", score: 30 },
    { word: "Pinocytosis", definition: "Cellular drinking process where a cell ingests extracellular fluid droplets.", etymology: "From Greek 'pinein' (to drink) + 'kytos' (cell) + '-osis' (process).", funFact: "It occurs continuously in almost all eukaryotic cell membranes.", score: 30 },
    { word: "Centriole", definition: "Cylindrical organelle that organizes spindle fibers during cell division.", etymology: "From Greek 'kentron' (center point) + Latin diminutive '-ole'.", funFact: "Centrioles are arranged in nine sets of triplet microtubules.", score: 20 },
    { word: "Peroxisome", definition: "Organelle that metabolizes lipids and neutralizes toxic hydrogen peroxide.", etymology: "From 'peroxide' + Greek 'soma' (body).", funFact: "Catalase enzyme inside peroxisomes converts toxic peroxide into water and oxygen instantly.", score: 20 },
    { word: "Plasmodesmata", definition: "Microscopic channels traversing plant cell walls for cell-to-cell transport.", etymology: "From Greek 'plasma' (something formed) + 'desma' (bond or band).", funFact: "Plasmodesmata allow direct molecular signaling between adjacent plant cells.", score: 30 },
    { word: "Autophagy", definition: "Self-degradation process where cells recycle damaged organelles.", etymology: "From Greek 'auto-' (self) + 'phagein' (to eat).", funFact: "Yoshinori Ohsumi won the 2016 Nobel Prize for discovering autophagy mechanisms.", score: 30 },
    { word: "Flagellum", definition: "Whip-like appendage enabling cell motility in sperm and bacteria.", etymology: "From Latin 'flagellum' (little whip).", funFact: "Bacterial flagella rotate like motorized boat propellers using proton pumps!", score: 20 },
    { word: "Cilia", definition: "Hair-like projections that sweep fluid or propel microscopic organisms.", etymology: "From Latin 'cilium' (eyelashes or eyelid).", funFact: "Cilia in human airways sweep mucus and dust out of lungs continuously.", score: 20 },
    { word: "Chromatin", definition: "Complex of DNA and histone proteins inside eukaryotic cell nuclei.", etymology: "From Greek 'chroma' (color), named for dark staining under microscope.", funFact: "Chromatin condenses into distinct chromosomes during cell division.", score: 20 },
    { word: "Prokaryote", definition: "Single-celled organism lacking a membrane-enclosed nucleus or organelles.", etymology: "From Greek 'pro' (before) + 'karyon' (kernel or nut).", funFact: "Bacteria and Archaea are prokaryotes, existing on Earth for over 3.5 billion years.", score: 10 },
    { word: "Eukaryote", definition: "Organism composed of complex cells containing a distinct membrane-bound nucleus.", etymology: "From Greek 'eu' (good/true) + 'karyon' (kernel or nut).", funFact: "All animals, plants, fungi, and protists are eukaryotic organisms.", score: 10 },
    { word: "Membrane", definition: "Phospholipid bilayer regulating substance transport into and out of cells.", etymology: "From Latin 'membrana' (skin or parchment).", funFact: "Cell membranes are selectively permeable thanks to hydrophobic tail regions.", score: 10 },
    { word: "Vesicle", definition: "Small membrane-bound sac transporting cellular products between organelles.", etymology: "From Latin 'vesicula' (little bubble).", funFact: "SNARE proteins guide vesicles to fuse precisely with target membranes.", score: 20 },
    { word: "Microtubule", definition: "Hollow protein tube forming structural tracks for intracellular transport.", etymology: "From Greek 'micros' (small) + Latin 'tubulus' (tube).", funFact: "Kinesin motor proteins walk along microtubules carrying cellular cargo.", score: 20 },
    { word: "Cytosol", definition: "Fluid portion of the cytoplasm surrounding cellular organelles.", etymology: "From Greek 'kytos' (cell) + 'sol' (solution).", funFact: "Glycolysis pathway reactions take place entirely inside the cytosol.", score: 10 }
  ],
  "genetics-dna": [
    { word: "DNA Polymerase", definition: "Enzyme responsible for forming new copies of DNA during replication.", etymology: "From DNA + Greek 'polys' (many) + 'meros' (part) + '-ase'.", funFact: "DNA polymerase proofreads newly built DNA strands for accuracy!", score: 30 },
    { word: "Messenger RNA", definition: "Single-stranded RNA molecule carrying genetic code from DNA to ribosomes.", etymology: "From English 'messenger' + Ribonucleic Acid.", funFact: "mRNA acts as the blueprint for protein synthesis during translation.", score: 20 },
    { word: "Double Helix", definition: "Twisted-ladder molecular structure of double-stranded DNA.", etymology: "From Latin 'duplus' (double) + Greek 'helix' (spiral).", funFact: "Discovered by Watson, Crick, and Franklin in 1953!", score: 20 },
    { word: "Base Pair", definition: "Pair of complementary nitrogenous bases in DNA or RNA (A-T, C-G).", etymology: "From Latin 'basis' (foundation) + Old French 'paire'.", funFact: "Adenine pairs with Thymine, and Cytosine pairs with Guanine.", score: 20 },
    { word: "Nucleotide", definition: "Basic structural subunit of DNA and RNA composed of base, sugar, and phosphate.", etymology: "From Latin 'nucleus' (kernel) + '-ide' (chemical compound suffix).", funFact: "Human DNA contains over 3 billion nucleotide base pairs!", score: 20 },
    { word: "Allele", definition: "One of two or more alternative forms of a gene arising by mutation.", etymology: "Shortened from German 'allelomorph', from Greek 'allelon' (of one another) + 'morphe' (form).", funFact: "Blood type ABO alleles determine human blood cell surface antigens.", score: 10 },
    { word: "Chromosome", definition: "Threadlike structure of nucleic acids and protein carrying genetic info.", etymology: "From Greek 'chroma' (color) + 'soma' (body), named for dark staining properties.", funFact: "Humans have 23 pairs of chromosomes, totaling 46 per cell.", score: 20 },
    { word: "Transcription", definition: "Synthesis of an RNA strand from a DNA template by RNA polymerase.", etymology: "From Latin 'transcribere' (to write over or copy across).", funFact: "mRNA transcription occurs inside the cell nucleus of eukaryotes.", score: 30 },
    { word: "Polymerase", definition: "Enzyme that synthesizes long chains of nucleic acids like DNA or RNA.", etymology: "From Greek 'polys' (many) + 'meros' (part) + enzyme suffix '-ase'.", funFact: "Taq polymerase from thermal vent bacteria enabled modern PCR tests!", score: 30 },
    { word: "Phenotype", definition: "Observable physical characteristics of an organism determined by genes and environment.", etymology: "From Greek 'phainein' (to show/appear) + 'typos' (type/mark).", funFact: "Identical twins share genotypes but can develop slightly different phenotypes.", score: 20 },
    { word: "Genotype", definition: "Genetic constitution of an individual organism.", etymology: "From Greek 'genos' (birth/race) + 'typos' (type or mark).", funFact: "Punnett squares predict genotype ratios in offspring.", score: 10 },
    { word: "Heterozygous", definition: "Having two different alleles for a particular gene.", etymology: "From Greek 'heteros' (other/different) + 'zygon' (yoke or join).", funFact: "Heterozygous advantage can provide disease resistance, like sickle trait against malaria.", score: 30 },
    { word: "Homozygous", definition: "Having two identical alleles for a particular trait.", etymology: "From Greek 'homos' (same) + 'zygon' (yoke or join).", funFact: "Purebred lines are homozygous for target traits.", score: 20 },
    { word: "Epigenetics", definition: "Study of heritable changes in gene expression without altering DNA sequence.", etymology: "From Greek 'epi-' (upon/over) + 'genetics' (origin).", funFact: "Diet and stress can leave epigenetic marks affecting gene regulation!", score: 30 },
    { word: "Telomere", definition: "Repetitive DNA cap at the end of a chromosome protecting genes from degradation.", etymology: "From Greek 'telos' (end) + 'meros' (part).", funFact: "Telomeres shorten as cells divide, acting as a biological aging clock.", score: 20 },
    { word: "Codon", definition: "Sequence of three nucleotides specifying a single amino acid.", etymology: "From English 'code' + suffix '-on' (unit).", funFact: "There are 64 possible codons coding for 20 essential amino acids.", score: 10 },
    { word: "Replication", definition: "Process by which a double-stranded DNA molecule is copied identically.", etymology: "From Latin 'replicare' (to fold back or repeat).", funFact: "DNA replication proceeds at speeds up to 1,000 nucleotides per second!", score: 20 },
    { word: "Translation", definition: "Process where ribosomes assemble amino acids based on mRNA codons.", etymology: "From Latin 'translatio' (carrying across).", funFact: "Transfer RNA (tRNA) acts as the physical translator between RNA and protein.", score: 20 },
    { word: "Mutation", definition: "Permanent change in the nucleotide sequence of an organism's genome.", etymology: "From Latin 'mutatio' (change or alteration).", funFact: "Mutations are the ultimate source of all genetic variation in evolution.", score: 10 },
    { word: "Genome", definition: "The complete set of genes or genetic material present in a cell or organism.", etymology: "From German 'Genom', blend of 'Gen' (gene) + 'Chromosom'.", funFact: "If unraveled, the DNA in a single human cell would stretch 6 feet long!", score: 20 },
    { word: "Intron", definition: "Non-coding nucleotide sequence removed from pre-mRNA during splicing.", etymology: "From 'intragenic region' (within the gene).", funFact: "Introns make up over 90% of human gene sequence lengths!", score: 20 },
    { word: "Exon", definition: "Coding region of a gene retained in mature messenger RNA.", etymology: "From 'expressed region' of a gene.", funFact: "Alternative splicing lets one gene produce multiple distinct proteins.", score: 20 },
    { word: "Histone", definition: "Spool-shaped protein around which DNA winds to form nucleosomes.", etymology: "From Greek 'histos' (tissue) or German 'Histon'.", funFact: "Histone acetylation opens up chromatin for transcription access.", score: 20 },
    { word: "Plasmid", definition: "Small circular extra-chromosomal DNA molecule found in bacteria.", etymology: "From Greek 'plasma' (something formed) + '-id'.", funFact: "Plasmids carry antibiotic resistance genes between bacterial populations.", score: 20 },
    { word: "CRISPR", definition: "Bacterial immune mechanism adapted for targeted genome editing.", etymology: "Acronym for Clustered Regularly Interspaced Short Palindromic Repeats.", funFact: "CRISPR-Cas9 won the 2020 Nobel Prize in Chemistry!", score: 30 }
  ],
  "photosynthesis-ecology": [
    { word: "Calvin Cycle", definition: "Light-independent reactions of photosynthesis where carbon dioxide is fixed into glucose.", etymology: "Eponymous, named after Melvin Calvin + Greek 'kyklos' (circle).", funFact: "The Calvin Cycle occurs inside the stroma of chloroplasts!", score: 20 },
    { word: "Cellular Respiration", definition: "Metabolic pathway breaking down glucose to produce cellular ATP energy.", etymology: "From Latin 'cellula' (small room) + 'respirare' (breathe).", funFact: "Cellular respiration produces roughly 36 to 38 ATP molecules per glucose molecule!", score: 20 },
    { word: "Krebs Cycle", definition: "Series of chemical reactions in mitochondria generating high-energy electron carriers.", etymology: "Eponymous, named after Hans Krebs (1937) + Greek 'kyklos'.", funFact: "Also known as the citric acid cycle or TCA cycle!", score: 30 },
    { word: "Chlorophyll", definition: "Green pigment in plants that absorbs light energy for photosynthesis.", etymology: "From Greek 'chloros' (pale green) + 'phyllon' (leaf).", funFact: "Chlorophyll absorbs blue and red wavelengths, reflecting green light to our eyes.", score: 20 },
    { word: "Thylakoid", definition: "Membrane-bound compartment inside chloroplasts hosting light reactions.", etymology: "From Greek 'thylakos' (pouch or sack) + '-oid' (resembling).", funFact: "Thylakoids stack into structures called grana, resembling tiny pancake stacks.", score: 20 },
    { word: "Biosphere", definition: "Global ecological system integrating all living beings and their relationships.", etymology: "From Greek 'bios' (life) + 'sphaira' (globe/sphere).", funFact: "The biosphere extends from deep ocean trenches to miles high in the atmosphere.", score: 20 },
    { word: "Biodiversity", definition: "Variety of plant and animal life in a habitat or the world.", etymology: "From Greek 'bios' (life) + Latin 'diversitas' (variety).", funFact: "Tropical rainforests cover only 6% of Earth but harbor over half of all species!", score: 20 },
    { word: "Mutualism", definition: "Symbiotic relationship where both participating species benefit.", etymology: "From Latin 'mutuus' (reciprocal/borrowed).", funFact: "Bees and flowering plants are classic examples of mutualistic coevolution.", score: 10 },
    { word: "Transpiration", definition: "Evaporation of water from plant stomata into the atmosphere.", etymology: "From Latin 'trans' (across) + 'spirare' (to breathe).", funFact: "A large oak tree can transpire over 40,000 gallons of water per year!", score: 20 },
    { word: "Autotroph", definition: "Organism that produces its own organic food using light or chemical energy.", etymology: "From Greek 'autos' (self) + 'trophe' (nourishment).", funFact: "Plants, algae, and cyanobacteria are the primary autotrophs powering food webs.", score: 20 },
    { word: "Ecosystem", definition: "Biological community of interacting organisms and their physical environment.", etymology: "From Greek 'oikos' (home/dwelling) + 'systema' (organized whole).", funFact: "Coral reefs support 25% of all marine life despite covering under 1% of ocean floor.", score: 10 },
    { word: "Stomata", definition: "Microscopic pores on leaf surfaces that open and close for gas exchange.", etymology: "From Greek 'stoma' (mouth or opening).", funFact: "Guard cells inflate with water to open stomata and deflate to close them.", score: 10 },
    { word: "Heterotroph", definition: "Organism deriving nutritional requirements from complex organic substances.", etymology: "From Greek 'heteros' (other) + 'trophe' (nourishment).", funFact: "All animals, fungi, and most bacteria are heterotrophs.", score: 20 },
    { word: "Rubisco", definition: "Key enzyme catalyzing atmospheric carbon fixation during Calvin Cycle.", etymology: "Acronym for Ribulose-1,5-bisphosphate carboxylase-oxygenase.", funFact: "Rubisco is considered the most abundant enzyme protein on Earth!", score: 30 },
    { word: "Stroma", definition: "Fluid-filled space surrounding thylakoids inside chloroplasts.", etymology: "From Greek 'stroma' (bedding or mattress).", funFact: "Calvin cycle dark reactions occur inside the chloroplast stroma.", score: 20 },
    { word: "Biomass", definition: "Total mass of organisms in a given ecological area or volume.", etymology: "From Greek 'bios' (life) + English 'mass'.", funFact: "Plant biomass makes up over 80% of all biological carbon mass on Earth.", score: 10 }
  ],
  "anatomy-physiology": [
    { word: "Red Blood Cell", definition: "Disc-shaped blood cell containing hemoglobin that transports oxygen throughout the body.", etymology: "From Old English 'read' + 'blod' + 'cell'.", funFact: "Mature human red blood cells lack a cell nucleus to maximize space for hemoglobin!", score: 20 },
    { word: "White Blood Cell", definition: "Immune system cell defending the body against infectious diseases and foreign invaders.", etymology: "From Old English 'hwit' + 'blod' + 'cell'.", funFact: "White blood cells can squeeze through blood vessel walls to reach infected tissue!", score: 20 },
    { word: "Neuron", definition: "Specialized cell transmitting electrical impulse signals throughout the nervous system.", etymology: "From Greek 'neuron' (nerve, tendon, or cord).", funFact: "Information travels along neurons at speeds up to 268 miles per hour!", score: 10 },
    { word: "Hemoglobin", definition: "Iron-containing protein in red blood cells that transports oxygen.", etymology: "From Greek 'haima' (blood) + Latin 'globus' (ball/sphere).", funFact: "A single red blood cell contains roughly 270 million hemoglobin molecules!", score: 20 },
    { word: "Synapse", definition: "Microscopic junction across which nerve impulses pass via neurotransmitters.", etymology: "From Greek 'synapsis' (conjunction or clasping together).", funFact: "The human brain contains over 100 trillion synaptic connections.", score: 20 },
    { word: "Homeostasis", definition: "State of steady internal physical and chemical conditions maintained by living systems.", etymology: "From Greek 'homios' (similar/same) + 'stasis' (standing still).", funFact: "Sweating and shivering are automatic homeostatic mechanisms for temperature control.", score: 30 },
    { word: "Alveoli", definition: "Tiny air sacs in the lungs where rapid gas exchange with blood occurs.", etymology: "From Latin 'alveolus' (little cavity or small hollow).", funFact: "If spread flat, human alveoli would cover an entire tennis court!", score: 20 },
    { word: "Peristalsis", definition: "Wave-like muscle contractions moving food through the digestive tract.", etymology: "From Greek 'peri' (around) + 'stalsis' (constriction/clasping).", funFact: "Peristalsis works against gravity, allowing you to swallow food even while upside down!", score: 20 },
    { word: "Capillary", definition: "Microscopic blood vessel connecting arteries and veins for fluid exchange.", etymology: "From Latin 'capillaris' (resembling a hair).", funFact: "Capillaries are so narrow that red blood cells must line up single-file to pass through.", score: 10 },
    { word: "Dendrite", definition: "Branched extension of a neuron receiving signals from other nerve cells.", etymology: "From Greek 'dendron' (tree).", funFact: "Purkinje neurons in the cerebellum can receive up to 200,000 dendrite inputs each!", score: 20 },
    { word: "Axon", definition: "Long slender projection of a nerve cell conducting impulses away from cell body.", etymology: "From Greek 'axon' (axis or axle).", funFact: "The longest human axon runs from the base of the spine to the big toe!", score: 20 },
    { word: "Myelin", definition: "Fatty insulating sheath wrapped around nerve axons speeding up impulse conduction.", etymology: "From Greek 'myelos' (marrow or innermost core).", funFact: "Myelinated nerve fibers transmit signals up to 100 times faster than unmyelinated fibers.", score: 20 }
  ],
  "chemistry-periodic": [
    { word: "Ionic Bond", definition: "Chemical bond formed through electro-static attraction between oppositely charged ions.", etymology: "From Greek 'ion' (going/moving) + English 'bond'.", funFact: "Table salt (NaCl) is held together by strong ionic crystalline bonds!", score: 10 },
    { word: "Covalent Bond", definition: "Chemical bond formed by the sharing of electron pairs between atoms.", etymology: "From 'co-' (jointly) + 'valence' (combining power).", funFact: "Water molecules are held together by strong covalent hydrogen-oxygen bonds.", score: 10 },
    { word: "Covalent", definition: "Chemical bond formed by the sharing of electron pairs between atoms.", etymology: "From 'co-' (jointly) + 'valence' (combining power).", funFact: "Water molecules are held together by strong covalent hydrogen-oxygen bonds.", score: 10 },
    { word: "Electronegativity", definition: "Measure of an atom's tendency to attract bonding electrons.", etymology: "From Greek 'elektron' (amber) + Latin 'negativus' (denying/negative).", funFact: "Fluorine is the most electronegative element on the periodic table.", score: 30 },
    { word: "Enthalpy", definition: "Thermodynamic quantity equivalent to total heat content of a system.", etymology: "From Greek 'enthalpein' (to warm within).", funFact: "Exothermic reactions release enthalpy into their surroundings as heat.", score: 30 },
    { word: "Polymer", definition: "Large molecule composed of repeated monomer subunits linked together.", etymology: "From Greek 'polys' (many) + 'meros' (part).", funFact: "DNA, proteins, cellulose, and plastics are all polymers!", score: 10 },
    { word: "Oxidation", definition: "Loss of electrons during a chemical reaction.", etymology: "From French 'oxygéner' (to combine with oxygen).", funFact: "Rusting iron and burning wood are both oxidation processes.", score: 20 },
    { word: "Catalyst", definition: "Substance that increases reaction rate without being consumed.", etymology: "From Greek 'katalysis' (dissolution).", funFact: "Enzymes are biological catalysts that speed up biochemical reactions millions of times.", score: 20 },
    { word: "Isotope", definition: "Variant of a chemical element possessing equal protons but different neutrons.", etymology: "From Greek 'isos' (equal) + 'topos' (place).", funFact: "Carbon-14 isotope decay is used by archaeologists for radiocarbon dating.", score: 20 },
    { word: "Stoichiometry", definition: "Calculation of relative quantities of reactants and products in chemical reactions.", etymology: "From Greek 'stoicheion' (element) + 'metron' (measure).", funFact: "Stoichiometry relies on the Law of Conservation of Mass.", score: 30 }
  ],
  "physics-mechanics": [
    { word: "Momentum", definition: "Product of an object's mass and its velocity.", etymology: "From Latin 'momentum' (movement, impulse, or turning power).", funFact: "Conservation of momentum explains how rocket propulsion works in vacuum.", score: 10 },
    { word: "Refraction", definition: "Bending of light waves when passing from one medium into another.", etymology: "From Latin 'refractio' (breaking back or deflection).", funFact: "Refraction creates rainbows as sunlight bends through rain droplets.", score: 20 },
    { word: "Velocity", definition: "Speed of an object in a specified direction.", etymology: "From Latin 'velocitas' (swiftness or speed).", funFact: "Terminal velocity is reached when air resistance equals gravitational pull.", score: 10 },
    { word: "Entropy", definition: "Measure of molecular disorder or randomness in a closed system.", etymology: "Coined by Rudolf Clausius from Greek 'en-' (in) + 'trope' (transformation).", funFact: "The Second Law of Thermodynamics dictates that total entropy always increases.", score: 20 },
    { word: "Wavelength", definition: "Distance between consecutive crests or troughs of a wave.", etymology: "Compound word from Old English 'wæf' (wave) + 'lengþu' (length).", funFact: "Gamma rays have wavelengths smaller than atomic nuclei!", score: 20 },
    { word: "Acceleration", definition: "Rate of change of velocity per unit of time.", etymology: "From Latin 'accelerare' (to hasten or speed up).", funFact: "Earth's gravitational acceleration at sea level is approximately 9.8 m/s².", score: 10 },
    { word: "Inertia", definition: "Tendency of an object to resist changes in its state of motion.", etymology: "From Latin 'inertia' (inactivity or sluggishness).", funFact: "Newton's First Law of Motion is also known as the Law of Inertia.", score: 10 }
  ],
  "astronomy-space": [
    { word: "Supernova", definition: "Cataclysmic explosion of a massive dying star.", etymology: "From Latin 'super' (above/beyond) + 'nova' (new star).", funFact: "A supernova brief flash can outshine an entire galaxy of billions of stars!", score: 20 },
    { word: "Exoplanet", definition: "Planet orbiting a star outside our solar system.", etymology: "From Greek 'exo-' (outside/external) + 'planet' (wanderer).", funFact: "Thousands of exoplanets have been discovered by NASA Kepler telescope.", score: 20 },
    { word: "Nebula", definition: "Interstellar cloud of dust, hydrogen, helium and ionized gases.", etymology: "From Latin 'nebula' (mist, cloud, or fog).", funFact: "Nebulae are stellar nurseries where new stars are born.", score: 20 },
    { word: "Singularity", definition: "Point of infinite density at the center of a black hole.", etymology: "From Latin 'singularis' (single or unique).", funFact: "At a singularity, known laws of physics cease to function.", score: 30 },
    { word: "Parallax", definition: "Apparent change in position of an object when viewed from different angles.", etymology: "From Greek 'parallaxis' (change or alternation).", funFact: "Astronomers use stellar parallax to measure distances to nearby stars.", score: 20 },
    { word: "Asteroid", definition: "Small rocky body orbiting the Sun, primarily in the asteroid belt.", etymology: "From Greek 'aster' (star) + '-oid' (resembling).", funFact: "Ceres was the first asteroid discovered in 1801 and is now classified as a dwarf planet.", score: 10 },
    { word: "Galaxy", definition: "Massive gravitationally bound system of stars, gas, and dark matter.", etymology: "From Greek 'galaxias' (milky circle or milky way).", funFact: "The observable universe contains an estimated 2 trillion galaxies!", score: 10 }
  ]
};

// General fallback terms for custom topics
export const GENERAL_SCIENCE_WORDS: OfflineWordInfo[] = [
  { word: "Hypothesis", definition: "Proposed testable explanation for an observable phenomenon.", etymology: "From Greek 'hypo' (under) + 'thesis' (placing/proposition).", funFact: "A good hypothesis must be falsifiable through experimental testing.", score: 10 },
  { word: "Experiment", definition: "Scientific procedure undertaken to test a hypothesis or discover facts.", etymology: "From Latin 'experimentum' (trial, test, or proof).", funFact: "Controlled experiments isolate variables to establish cause and effect.", score: 10 },
  { word: "Metabolism", definition: "Sum of all chemical reactions taking place within living cells.", etymology: "From Greek 'metabole' (change or transformation).", funFact: "Basal metabolism accounts for 60-75% of daily human energy expenditure.", score: 20 },
  { word: "Equilibrium", definition: "State where opposing forces or actions are balanced.", etymology: "From Latin 'aequus' (equal) + 'libra' (balance/weight).", funFact: "Dynamic equilibrium means forward and reverse processes happen at equal rates.", score: 20 },
  { word: "Symbiosis", definition: "Close biological interaction between two different species.", etymology: "From Greek 'syn-' (together) + 'bios' (life).", funFact: "Symbiosis includes mutualism, commensalism, and parasitism.", score: 20 },
  { word: "Epithelium", definition: "Membranous tissue covering internal organs and outer body surfaces.", etymology: "From Greek 'epi' (upon) + 'thele' (nipple/layer).", funFact: "Skin is the largest epithelial tissue organ in the human body.", score: 20 },
  { word: "Substrate", definition: "Surface or chemical reactant upon which an enzyme acts.", etymology: "From Latin 'substratum' (spread under).", funFact: "Enzyme active sites fit substrates like a lock and key mechanism.", score: 20 },
  { word: "Biochemistry", definition: "Branch of science exploring chemical processes within living organisms.", etymology: "From Greek 'bios' (life) + Alchemy/Chemistry.", funFact: "Biochemistry bridges biology and chemistry to unravel molecular life.", score: 20 }
];

export function getOfflineWordList(topicKey?: string): OfflineWordInfo[] {
  if (!topicKey) return GENERAL_SCIENCE_WORDS;
  const normalized = topicKey.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check direct or partial key match in SCIENCE_DICTIONARIES
  for (const [key, list] of Object.entries(SCIENCE_DICTIONARIES)) {
    const cleanKey = key.replace(/[^a-z0-9]/g, "");
    if (normalized.includes(cleanKey) || cleanKey.includes(normalized)) {
      return list;
    }
  }

  // Check matching individual keyword parts
  for (const [key, list] of Object.entries(SCIENCE_DICTIONARIES)) {
    const keyWords = key.split("-");
    if (keyWords.some((kw) => kw.length >= 3 && normalized.includes(kw))) {
      return list;
    }
  }

  return GENERAL_SCIENCE_WORDS;
}

// 1. OFFLINE STUDENT WORD VALIDATION
export function validateStudentWordOffline(topic: string, rawInput: string, usedWords: string[]) {
  const cleanInput = rawInput.trim().toLowerCase().replace(/\s+/g, " ");
  const topicWords = getOfflineWordList(topic);
  const allWords = [...topicWords, ...GENERAL_SCIENCE_WORDS];

  // Check if already used
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

  // 1. Exact match in dictionary
  const exactMatch = allWords.find(
    (w) => w.word.toLowerCase() === cleanInput
  );

  if (exactMatch) {
    return {
      studentValidation: {
        isValid: true,
        reason: "Valid science term!",
        normalizedWord: exactMatch.word,
        definition: exactMatch.definition,
        etymology: exactMatch.etymology,
        score: exactMatch.score || 20,
        matchedBingoTileId: exactMatch.word.toLowerCase()
      }
    };
  }

  // 2. Substring or multi-word term match where cleanInput contains dictionary word or vice versa
  const partialMatch = allWords.find((w) => {
    const dictLower = w.word.toLowerCase();
    return dictLower === cleanInput || cleanInput.includes(dictLower) || dictLower.includes(cleanInput);
  });

  if (partialMatch) {
    const formattedUserWord = rawInput
      .trim()
      .split(/\s+/)
      .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
      .join(" ");

    return {
      studentValidation: {
        isValid: true,
        reason: "Valid scientific terminology!",
        normalizedWord: formattedUserWord,
        definition: partialMatch.definition,
        etymology: partialMatch.etymology,
        score: partialMatch.score || 20,
        matchedBingoTileId: partialMatch.word.toLowerCase()
      }
    };
  }

  // 3. Fallback heuristic validation allowing single or multi-word terms (letters, spaces, hyphens)
  if (
    cleanInput.length >= 3 &&
    /^[a-z\s\-]+$/i.test(cleanInput)
  ) {
    const formattedWord = rawInput
      .trim()
      .split(/\s+/)
      .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
      .join(" ");

    return {
      studentValidation: {
        isValid: true,
        reason: "Valid scientific terminology!",
        normalizedWord: formattedWord,
        definition: `Biological concept relating to ${topic.replace(/-/g, " ")}.`,
        etymology: `Derived from classical Greek and Latin root terms in ${topic.replace(/-/g, " ")}.`,
        score: 15,
        matchedBingoTileId: cleanInput.replace(/\s+/g, "-")
      }
    };
  }

  return {
    studentValidation: {
      isValid: false,
      reason: `"${rawInput.trim()}" was not recognized in the ${topic.replace(/-/g, " ")} science dictionary. Try a key science term!`,
      normalizedWord: rawInput.trim(),
      definition: "",
      etymology: "",
      score: 0
    }
  };
}

// 2. OFFLINE AI TURN GENERATION
export function getAiTurnOffline(topic: string, usedWords: string[]) {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/\s+/g, " "));

  // Filter out already used words from topic dictionary
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

  // Fallback to general science words ONLY if topic words are exhausted
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

  // Smart dynamic word fallback
  return {
    word: "Bioenergetics",
    definition: "Study of energy flow and transformation within living biological systems.",
    etymology: "From Greek 'bios' (life) + 'energeia' (activity/work).",
    funFact: "Bioenergetics governs metabolic rates and cellular respiration efficiency.",
    score: 25,
    matchedBingoTileId: "bioenergetics"
  };
}

// 3. OFFLINE 5x5 BINGO BOARD GENERATION
export function generateBingoTilesOffline(topic: string) {
  const wordList = getOfflineWordList(topic);
  let pool = [...wordList];
  if (pool.length < 25) {
    pool = [...pool, ...GENERAL_SCIENCE_WORDS];
  }
  
  // Shuffle pool
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  
  // Take top 25 items
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

// 4. OFFLINE HINT GENERATION
export function getOfflineHint(topic: string, usedWords: string[]): string {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/\s+/g, " "));
  const unused = dictionary.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (unused.length > 0) {
    const word = unused[Math.floor(Math.random() * unused.length)];
    return `Hint: Think about a term starting with '${word.word.charAt(0)}' related to: ${word.definition}`;
  }

  return `Hint: Enter terms related to cellular structure, genetics, metabolism, or biochemical pathways in ${topic}.`;
}
