export interface OfflineWordInfo {
  word: string;
  definition: string;
  etymology: string;
  funFact: string;
  score: number;
}

export const SCIENCE_DICTIONARIES: Record<string, OfflineWordInfo[]> = {
  "cell-biology": [
    { word: "Cell Wall", definition: "Rigid outer layer surrounding plant, fungal, and bacterial cells providing structural support and protection.", etymology: "From Old English 'cell' (small room) + Old English 'weall' (rampart or wall).", funFact: "Plant cell walls are primarily constructed from strong cellulose microfibrils!", score: 10 },
    { word: "Cell Membrane", definition: "Selectively permeable phospholipid bilayer regulating substance transport into and out of cells.", etymology: "From Old English 'cell' + Latin 'membrana' (skin or parchment).", funFact: "The cell membrane operates as a fluid mosaic embedded with protein channels!", score: 10 },
    { word: "Plasma Membrane", definition: "Outer boundary of a cell enclosing cytoplasm and organelles, maintaining internal homeostasis.", etymology: "From Greek 'plasma' (something molded) + Latin 'membrana' (skin).", funFact: "Selective permeability enables cells to maintain distinct ion concentrations inside vs outside.", score: 10 },
    { word: "Nucleus", definition: "Membrane-bound central organelle housing genomic DNA and orchestrating cellular activity.", etymology: "From Latin 'nucleus' (kernel, core, or nut).", funFact: "The nucleus was the very first cellular organelle discovered under light microscopy!", score: 10 },
    { word: "Nucleolus", definition: "Dense non-membrane organelle inside the nucleus where ribosomal RNA is transcribed and assembled.", etymology: "From Latin 'nucleolus' (little kernel or small nucleus).", funFact: "The nucleolus disassembles during mitosis and reassembles during telophase.", score: 20 },
    { word: "Mitochondria", definition: "Double-membrane organelle that generates cellular ATP through oxidative phosphorylation.", etymology: "From Greek 'mitos' (thread) + 'chondrion' (granule or grain).", funFact: "Mitochondria possess their own distinct circular DNA inherited maternally!", score: 20 },
    { word: "Mitochondrion", definition: "Singular form of mitochondria; the power-generating organelle of eukaryotic cells.", etymology: "From Greek 'mitos' (thread) + 'chondrion' (granule).", funFact: "Heart muscle cells contain up to 5,000 mitochondria per cell to fuel constant pumping!", score: 20 },
    { word: "Chloroplast", definition: "Organelle in plant cells that converts solar light energy into chemical sugars via photosynthesis.", etymology: "From Greek 'chloros' (pale green) + 'plastos' (formed or molded).", funFact: "Chloroplasts originated through endosymbiosis over 1.5 billion years ago.", score: 20 },
    { word: "Ribosome", definition: "Molecular machine composed of rRNA and proteins that translates mRNA into polypeptide chains.", etymology: "From 'ribo' (ribonucleic acid) + Greek 'soma' (body).", funFact: "Active human liver cells can harbor over 10 million individual ribosomes!", score: 20 },
    { word: "Endoplasmic Reticulum", definition: "Extensive internal membrane network synthesizing proteins (Rough ER) and lipids (Smooth ER).", etymology: "From Greek 'endon' (within) + 'plasma' (molded) + Latin 'reticulum' (little net).", funFact: "Rough ER is studded with ribosomes, whereas Smooth ER detoxifies drugs and stores calcium.", score: 20 },
    { word: "Rough ER", definition: "Ribosome-studded portion of the endoplasmic reticulum specializing in protein synthesis.", etymology: "Descriptive name for ribosome-studded membranous network.", funFact: "Proteins made in Rough ER are packaged into vesicles for Golgi transport.", score: 20 },
    { word: "Smooth ER", definition: "Portion of endoplasmic reticulum lacking ribosomes, synthesizing lipids and steroids.", etymology: "Descriptive name for ribosome-free membranous network.", funFact: "Liver cell Smooth ER neutralizes toxins and metabolic metabolic waste products.", score: 20 },
    { word: "Golgi Apparatus", definition: "Organelle that modifies, packages, and routes proteins and lipids received from the ER.", etymology: "Eponymous, named after Camillo Golgi (1898) + Latin 'apparatus' (equipment).", funFact: "It acts as the cellular post office, adding carbohydrate tags to direct molecular delivery.", score: 20 },
    { word: "Golgi Body", definition: "Stack of membrane-bound cisternae involved in protein modification and secretion.", etymology: "Eponymous, named after Italian physician Camillo Golgi.", funFact: "Plant cells can contain hundreds of individual Golgi bodies called dictyosomes.", score: 20 },
    { word: "Lysosome", definition: "Membrane-bound acidic vesicle containing hydrolytic digestive enzymes.", etymology: "From Greek 'lysis' (dissolution or loosening) + 'soma' (body).", funFact: "Lysosomes maintain an internal pH of ~4.5 to optimize digestive enzyme activity.", score: 20 },
    { word: "Peroxisome", definition: "Organelle that oxidizes fatty acids and converts toxic hydrogen peroxide into water and oxygen.", etymology: "From 'peroxide' + Greek 'soma' (body).", funFact: "Catalase enzyme in peroxisomes breaks down millions of peroxide molecules per second!", score: 20 },
    { word: "Vacuole", definition: "Large membrane-bound organelle storing water, nutrients, pigments, and cellular waste.", etymology: "From Latin 'vacuus' (empty) + '-ole' (small suffix).", funFact: "Central vacuoles in plant cells can occupy up to 90% of total cell volume!", score: 10 },
    { word: "Central Vacuole", definition: "Large fluid-filled vacuole in plant cells maintaining turgor pressure against the cell wall.", etymology: "From Latin 'centralis' + 'vacuus' (empty).", funFact: "Loss of water in the central vacuole causes plant leaves to wilt.", score: 20 },
    { word: "Cytoplasm", definition: "Jelly-like cytosol and suspended organelles contained within the plasma membrane.", etymology: "From Greek 'kytos' (hollow vessel/cell) + 'plasma' (something molded).", funFact: "About 80% of cytoplasm consists of water, dissolved salts, and proteins.", score: 10 },
    { word: "Cytosol", definition: "Aqueous fluid component of cytoplasm surrounding cellular organelles.", etymology: "From Greek 'kytos' (cell) + 'sol' (solution).", funFact: "Anaerobic glycolysis reactions occur entirely within the cytosol.", score: 10 },
    { word: "Cytoskeleton", definition: "Network of protein filaments providing structural rigidity, cell motility, and intracellular transport.", etymology: "From Greek 'kytos' (cell) + 'skeleton' (dried body).", funFact: "Motor proteins literally walk along cytoskeletal tracks carrying cargo vesicles!", score: 30 },
    { word: "Microtubule", definition: "Hollow cylindrical filament made of tubulin dimers forming spindle fibers and cilia.", etymology: "From Greek 'micros' (small) + Latin 'tubulus' (small tube).", funFact: "Microtubules dynamically assemble and disassemble during mitosis.", score: 20 },
    { word: "Microfilament", definition: "Solid thin helical rod made of actin protein supporting cell shape and movement.", etymology: "From Greek 'micros' + Latin 'filum' (thread).", funFact: "Actin microfilaments enable amoeboid movement and muscle contraction.", score: 20 },
    { word: "Intermediate Filament", definition: "Tough fibrous protein filament providing mechanical strength to cell structures.", etymology: "Descriptive size category between microfilaments and microtubules.", funFact: "Keratin in human skin and hair is a primary example of intermediate filaments.", score: 30 },
    { word: "Centriole", definition: "Cylindrical organelle composed of microtubule triplets organizing cell division spindles.", etymology: "From Greek 'kentron' (center point) + Latin diminutive '-ole'.", funFact: "Centrioles occur in pairs positioned at right angles inside the centrosome.", score: 20 },
    { word: "Centrosome", definition: "Main microtubule-organizing center near the nucleus in animal cells.", etymology: "From Greek 'kentron' (center) + 'soma' (body).", funFact: "Centrosomes duplicate prior to mitosis to form the opposing spindle poles.", score: 20 },
    { word: "Cilia", definition: "Short hair-like projections that beat rhythmically to move fluid or propel cells.", etymology: "From Latin 'cilium' (eyelash or eyelid).", funFact: "Respiratory tract cilia continuously sweep mucus and dust out of human lungs.", score: 20 },
    { word: "Flagellum", definition: "Long whip-like tail enabling cellular propulsion in sperm and bacteria.", etymology: "From Latin 'flagellum' (whip).", funFact: "Bacterial flagella rotate like microscopic boat propellers powered by proton gradients!", score: 20 },
    { word: "Plasmodesmata", definition: "Microscopic membrane-lined channels traversing plant cell walls for intercellular communication.", etymology: "From Greek 'plasma' (formed material) + 'desma' (bond or band).", funFact: "Plasmodesmata enable direct exchange of water, nutrients, and signaling molecules between plant cells.", score: 30 },
    { word: "Vesicle", definition: "Small membrane-bound sac transporting proteins and lipids between cellular compartments.", etymology: "From Latin 'vesicula' (little bubble).", funFact: "SNARE proteins guide vesicles to dock and fuse with specific organelle membranes.", score: 10 },
    { word: "Thylakoid", definition: "Disc-shaped membrane sac inside chloroplasts hosting light-dependent photosynthesis reactions.", etymology: "From Greek 'thylakos' (pouch or sack) + '-oid' (resembling).", funFact: "Thylakoids stack into columns called grana inside chloroplasts.", score: 20 },
    { word: "Stroma", definition: "Fluid matrix surrounding thylakoids inside chloroplasts where the Calvin Cycle occurs.", etymology: "From Greek 'stroma' (bedding or layer).", funFact: "The stroma contains chloroplast DNA, ribosomes, and carbon fixation enzymes.", score: 20 },
    { word: "Granum", definition: "Stack of thylakoid discs embedded in the chloroplast stroma.", etymology: "From Latin 'granum' (grain or seed).", funFact: "Grana maximize surface area for light-harvesting chlorophyll complexes.", score: 20 },
    { word: "Tonoplast", definition: "Selective membrane enclosing the central vacuole in plant cells.", etymology: "From Greek 'tonos' (tension) + 'plastos' (molded).", funFact: "The tonoplast actively pumps protons to maintain vacuolar acidity.", score: 30 },
    { word: "Phospholipid Bilayer", definition: "Two-layered arrangement of phosphate-headed lipids forming cell membranes.", etymology: "From Greek 'phos' (light/phosphate) + 'lipos' (fat) + 'bi-' (two) + layer.", funFact: "Hydrophilic heads face outward toward water, while hydrophobic tails face inward.", score: 20 },
    { word: "Fluid Mosaic Model", definition: "Structural model depicting cell membranes as flexible lipid bilayers with floating proteins.", etymology: "Proposed by Singer and Nicolson in 1972.", funFact: "Membranes remain fluid at body temperature, allowing lateral protein movement.", score: 20 },
    { word: "Active Transport", definition: "Energy-requiring movement of substances across membranes against concentration gradients.", etymology: "From Latin 'activus' (acting) + 'trans-portare' (carry across).", funFact: "Active transport consumes up to 40% of resting cellular ATP energy!", score: 20 },
    { word: "Passive Transport", definition: "Movement of biochemicals across membranes along concentration gradients without ATP energy.", etymology: "From Latin 'passivus' (yielding) + 'trans-portare'.", funFact: "Simple diffusion, osmosis, and facilitated diffusion are forms of passive transport.", score: 20 },
    { word: "Osmosis", definition: "Passive diffusion of water molecules across selectively permeable membranes from low to high solute concentrations.", etymology: "From Greek 'osmos' (push or impulse).", funFact: "Turgor pressure generated by osmosis keeps non-woody plant stems standing upright.", score: 20 },
    { word: "Diffusion", definition: "Net movement of particles from regions of high concentration to lower concentration.", etymology: "From Latin 'diffundere' (to pour out or spread).", funFact: "Gas exchange in human lungs relies entirely on simple diffusion.", score: 10 },
    { word: "Facilitated Diffusion", definition: "Passive transport of polar molecules across membranes aided by channel or carrier proteins.", etymology: "From Latin 'facilis' (easy) + 'diffundere'.", funFact: "Aquaporin protein channels speed up water diffusion across cell membranes.", score: 20 },
    { word: "Aquaporin", definition: "Integral membrane channel protein facilitating rapid water transport.", etymology: "From Latin 'aqua' (water) + 'porus' (passage).", funFact: "Peter Agre discovered aquaporins and received the 2003 Nobel Prize in Chemistry!", score: 30 },
    { word: "Endocytosis", definition: "Cellular ingestion process where membranes invaginate to engulf external particles into vesicles.", etymology: "From Greek 'endon' (within) + 'kytos' (cell) + '-osis' (process).", funFact: "White blood cells capture foreign bacteria through endocytosis.", score: 20 },
    { word: "Exocytosis", definition: "Process where intracellular vesicles fuse with the plasma membrane to secrete substances.", etymology: "From Greek 'exo' (outside) + 'kytos' (cell) + '-osis'.", funFact: "Neurons release neurotransmitters into synapses via rapid exocytosis.", score: 20 },
    { word: "Phagocytosis", definition: "Cellular eating wherein large solid particles or pathogens are engulfed into phagosomes.", etymology: "From Greek 'phagein' (to eat) + 'kytos' (cell) + '-osis'.", funFact: "Human macrophages can engulf up to 100 bacterial invaders before dying.", score: 20 },
    { word: "Pinocytosis", definition: "Cellular drinking where liquid droplets are internalized into tiny vesicles.", etymology: "From Greek 'pinein' (to drink) + 'kytos' (cell) + '-osis'.", funFact: "Pinocytosis occurs continuously across capillary endothelial cells.", score: 20 },
    { word: "Turgor Pressure", definition: "Hydrostatic force exerted by water inside the vacuole pushing against the plant cell wall.", etymology: "From Latin 'turgere' (to swell).", funFact: "Turgor pressure provides mechanical stiffness to un-woody plant tissues.", score: 20 },
    { word: "Plasmolysis", definition: "Shrinkage of protoplasm away from the cell wall when a plant cell is placed in hypertonic solution.", etymology: "From Greek 'plasma' (molded) + 'lysis' (loosening).", funFact: "Plasmolysis causes wilted leaves when crops are exposed to salty soils.", score: 30 },
    { word: "Apoptosis", definition: "Regulated programmed cell death maintaining tissue health and developmental shaping.", etymology: "From Greek 'apo-' (away) + 'ptosis' (falling off).", funFact: "Apoptosis removes embryonic webbing between human fingers and toes during fetal development.", score: 30 },
    { word: "Mitosis", definition: "Eukaryotic nuclear division producing two genetically identical diploid daughter nuclei.", etymology: "From Greek 'mitos' (warp thread), describing thread-like chromosomes.", funFact: "Mitosis takes roughly 1 to 2 hours in typical human somatic cells.", score: 10 },
    { word: "Meiosis", definition: "Specialized double cell division producing four genetically distinct haploid gametes.", etymology: "From Greek 'meiosis' (lessening or reduction).", funFact: "Genetic recombination during meiosis produces over 8 million possible human gamete variations!", score: 20 },
    { word: "Interphase", definition: "Non-dividing phase of cell cycle consisting of G1, S, and G2 subphases.", etymology: "From Latin 'inter' (between) + Greek 'phasis' (appearance).", funFact: "Cells spend roughly 90% of their lifespan inside interphase duplicating organelles and DNA.", score: 20 },
    { word: "Prophase", definition: "First phase of cell division where chromatin condenses into visible chromosomes.", etymology: "From Greek 'pro' (before) + 'phasis' (phase).", funFact: "The nuclear envelope breaks down and spindle fibers begin assembling during prophase.", score: 20 },
    { word: "Metaphase", definition: "Stage of cell division where chromosomes align along the equatorial metaphase plate.", etymology: "From Greek 'meta' (between/after) + 'phasis'.", funFact: "Cell cycle checkpoints verify spindle attachment at metaphase before separation.", score: 20 },
    { word: "Anaphase", definition: "Phase of cell division where sister chromatids are pulled apart toward opposite poles.", etymology: "From Greek 'ana' (up/back) + 'phasis'.", funFact: "Anaphase is the shortest phase of mitosis, completing in mere minutes.", score: 20 },
    { word: "Telophase", definition: "Final phase of cell division where daughter nuclei reform around separated chromatin.", etymology: "From Greek 'telos' (end) + 'phasis'.", funFact: "Chromosomes uncoil back into diffuse chromatin as nuclear envelopes reassemble.", score: 20 },
    { word: "Cytokinesis", definition: "Physical division of the cytoplasm creating two distinct daughter cells.", etymology: "From Greek 'kytos' (cell) + 'kinesis' (movement).", funFact: "Animal cells form a cleavage furrow while plant cells construct a rigid cell plate.", score: 20 },
    { word: "Chromatin", definition: "Uncoiled complex of DNA and histone proteins inside non-dividing eukaryotic nuclei.", etymology: "From Greek 'chroma' (color), named for dark staining under microscope dyes.", funFact: "Euchromatin is loosely packed and active, whereas heterochromatin is tightly condensed.", score: 20 },
    { word: "Chromosome", definition: "Condensed threadlike structure of nucleic acid and histone protein carrying hereditary genes.", etymology: "From Greek 'chroma' (color) + 'soma' (body).", funFact: "Humans possess 23 pairs of chromosomes, totaling 46 per somatic cell.", score: 20 },
    { word: "Chromatid", definition: "One of two identical copies of a duplicated chromosome joined at the centromere.", etymology: "From Greek 'chroma' + diminutive suffix '-id'.", funFact: "Sister chromatids separate during anaphase to become individual chromosomes.", score: 20 },
    { word: "Centromere", definition: "Constricted chromosome region connecting sister chromatids where spindle fibers attach.", etymology: "From Greek 'kentron' (center) + 'meros' (part).", funFact: "Centromeres contain specialized protein assemblies called kinetochores.", score: 20 },
    { word: "Kinetochore", definition: "Protein structure on centromeres where spindle microtubules attach during division.", etymology: "From Greek 'kinein' (to move) + 'chora' (place).", funFact: "Kinetochores generate pulling forces that haul chromosomes during anaphase.", score: 30 },
    { word: "Prokaryote", definition: "Single-celled organism lacking a membrane-bound nucleus or complex organelles.", etymology: "From Greek 'pro' (before) + 'karyon' (kernel or nut).", funFact: "Prokaryotes (Bacteria & Archaea) have inhabited Earth for over 3.5 billion years!", score: 10 },
    { word: "Eukaryote", definition: "Organism composed of complex cells containing a distinct membrane-bound nucleus.", etymology: "From Greek 'eu' (true/good) + 'karyon' (kernel or nut).", funFact: "Animals, plants, fungi, and protists are all eukaryotic organisms.", score: 10 }
  ],
  "genetics-dna": [
    { word: "DNA", definition: "Deoxyribonucleic acid; molecule carrying genetic instructions for development and functioning.", etymology: "Acronym for Deoxyribonucleic Acid.", funFact: "If uncoiled, DNA from a single human cell would measure 6 feet long!", score: 10 },
    { word: "RNA", definition: "Ribonucleic acid; single-stranded nucleic acid involved in protein synthesis and regulation.", etymology: "Acronym for Ribonucleic Acid.", funFact: "RNA can act both as genetic messenger and as catalytic enzyme (ribozyme)!", score: 10 },
    { word: "Double Helix", definition: "Spiral, twisted-ladder molecular structure of double-stranded DNA.", etymology: "From Latin 'duplus' (double) + Greek 'helix' (spiral).", funFact: "James Watson, Francis Crick, and Rosalind Franklin unraveled the double helix in 1953.", score: 20 },
    { word: "Nucleotide", definition: "Monomeric subunit of nucleic acids consisting of nitrogenous base, 5-carbon sugar, and phosphate group.", etymology: "From Latin 'nucleus' (kernel) + chemical suffix '-ide'.", funFact: "The human genome comprises over 3 billion nucleotide base pairs!", score: 20 },
    { word: "Base Pair", definition: "Two complementary nitrogenous bases paired together in double-stranded DNA (A-T, C-G).", etymology: "From Latin 'basis' (foundation) + Old French 'paire'.", funFact: "Adenine pairs with Thymine via 2 hydrogen bonds; Cytosine pairs with Guanine via 3.", score: 10 },
    { word: "Adenine", definition: "Purine nitrogenous base that pairs with thymine in DNA and uracil in RNA.", etymology: "From Greek 'aden' (gland), first isolated from pancreas tissue.", funFact: "Adenine also forms the core framework of cellular energy currency (ATP).", score: 20 },
    { word: "Thymine", definition: "Pyrimidine nitrogenous base found exclusively in DNA pairing with adenine.", etymology: "Isolated from calf thymus gland in 1893.", funFact: "Thymine is replaced by Uracil in RNA molecules.", score: 20 },
    { word: "Guanine", definition: "Purine nitrogenous base that pairs with cytosine in nucleic acids.", etymology: "First isolated from bird guano droppings in 1844.", funFact: "Guanine-rich DNA sequences can fold into four-stranded structures called G-quadruplexes.", score: 20 },
    { word: "Cytosine", definition: "Pyrimidine nitrogenous base that pairs with guanine in DNA and RNA.", etymology: "Isolated from calf thymus cells in 1894.", funFact: "Methylation of cytosine bases is a key mechanism of epigenetic gene silencing.", score: 20 },
    { word: "Uracil", definition: "Pyrimidine nitrogenous base present in RNA instead of thymine, pairing with adenine.", etymology: "Coined in 1900 from uric acid derivatives.", funFact: "Uracil requires less metabolic energy for cells to synthesize than thymine.", score: 20 },
    { word: "DNA Polymerase", definition: "Enzyme synthesizing new DNA strands complementary to template strands during replication.", etymology: "From DNA + Greek 'polys' (many) + 'meros' (part) + '-ase'.", funFact: "DNA polymerase proofreads newly added bases, dropping mutation rates to 1 per billion!", score: 30 },
    { word: "RNA Polymerase", definition: "Enzyme synthesizing messenger RNA transcripts from DNA gene templates.", etymology: "From RNA + Greek 'polys' + 'meros' + '-ase'.", funFact: "RNA polymerase unwinds DNA double strands as it transcribes mRNA.", score: 30 },
    { word: "Helicase", definition: "Enzyme unwinding double-stranded DNA by breaking hydrogen bonds between base pairs.", etymology: "From 'helix' + enzyme suffix '-ase'.", funFact: "Helicase moves along DNA strands like a zipper runner at high speeds.", score: 20 },
    { word: "Ligase", definition: "Enzyme sealing nicks in DNA sugar-phosphate backbones by forming phosphodiester bonds.", etymology: "From Latin 'ligare' (to bind or tie) + '-ase'.", funFact: "DNA ligase joins Okazaki fragments together during lagging strand replication.", score: 20 },
    { word: "Messenger RNA", definition: "Single-stranded RNA carrying gene coding sequences from DNA to ribosomes for translation.", etymology: "From English 'messenger' + Ribonucleic Acid.", funFact: "mRNA vaccines use lipid nanoparticles to deliver viral code directly to cells.", score: 20 },
    { word: "mRNA", definition: "Abbreviation for messenger RNA carrying genetic instructions to ribosomes.", etymology: "Acronym for Messenger Ribonucleic Acid.", funFact: "Eukaryotic mRNA undergoes capping, polyadenylation, and splicing before export.", score: 10 },
    { word: "Transfer RNA", definition: "Adaptor RNA carrying specific amino acids to ribosomes corresponding to mRNA codons.", etymology: "From English 'transfer' + Ribonucleic Acid.", funFact: "tRNA molecules fold into a characteristic cloverleaf secondary structure.", score: 20 },
    { word: "tRNA", definition: "Abbreviation for transfer RNA decoding mRNA triplets during protein synthesis.", etymology: "Acronym for Transfer Ribonucleic Acid.", funFact: "Each tRNA features an anticodon loop matching specific mRNA codons.", score: 10 },
    { word: "Ribosomal RNA", definition: "Structural and catalytic RNA component of ribosomes facilitating peptide bond formation.", etymology: "From 'ribosome' + Ribonucleic Acid.", funFact: "rRNA accounts for over 80% of all RNA present inside a typical cell!", score: 20 },
    { word: "rRNA", definition: "Abbreviation for ribosomal RNA forming the catalytic core of ribosomes.", etymology: "Acronym for Ribosomal Ribonucleic Acid.", funFact: "rRNA acts as a ribozyme catalyzing peptide bond synthesis during translation.", score: 10 },
    { word: "Transcription", definition: "Process of copying a gene's DNA sequence into a complementary RNA transcript.", etymology: "From Latin 'transcribere' (to copy in writing).", funFact: "Transcription takes place inside the cell nucleus of eukaryotic organisms.", score: 30 },
    { word: "Translation", definition: "Ribosomal synthesis of polypeptide chains decoded from messenger RNA codon sequences.", etymology: "From Latin 'translatio' (carrying across).", funFact: "Translation proceeds at speeds up to 20 amino acids per second in bacteria!", score: 30 },
    { word: "Codon", definition: "Sequence of three consecutive nucleotides in mRNA specifying a specific amino acid.", etymology: "From English 'code' + unit suffix '-on'.", funFact: "There are 64 possible codons coding for 20 essential amino acids plus 3 stop signals.", score: 10 },
    { word: "Anticodon", definition: "Three-nucleotide sequence on tRNA complementary to a specific mRNA codon.", etymology: "From Greek 'anti' (opposite) + 'codon'.", funFact: "Wobble base pairing allows some anticodons to pair with multiple codons.", score: 20 },
    { word: "Gene", definition: "Basic physical and functional unit of heredity composed of DNA coding sequences.", etymology: "Coined by Wilhelm Johannsen in 1909 from Greek 'genos' (origin/birth).", funFact: "The human genome contains approximately 20,000 protein-coding genes.", score: 10 },
    { word: "Genome", definition: "The complete set of genetic material contained within an organism or cell.", etymology: "Blend of 'gene' + 'chromosome'.", funFact: "The Human Genome Project mapped all 3 billion letters of human DNA in 2003.", score: 20 },
    { word: "Allele", definition: "One of alternative variant forms of a gene located at a specific chromosome locus.", etymology: "Shortened from 'allelomorph', from Greek 'allelon' (mutual) + 'morphe' (form).", funFact: "ABO blood type variations are governed by three primary alleles: A, B, and O.", score: 10 },
    { word: "Genotype", definition: "The complete set of genes or specific allele combination of an organism.", etymology: "From Greek 'genos' (birth) + 'typos' (mark/type).", funFact: "Genotypes determine inherited traits, interacting with environment to yield phenotypes.", score: 10 },
    { word: "Phenotype", definition: "Observable physical, physiological, or behavioral characteristics of an organism.", etymology: "From Greek 'phainein' (to show/appear) + 'typos' (mark).", funFact: "Identical twins possess identical genotypes but can exhibit distinct phenotypes.", score: 10 },
    { word: "Homozygous", definition: "Having two identical alleles for a specific gene locus (e.g. AA or aa).", etymology: "From Greek 'homos' (same) + 'zygon' (yoke).", funFact: "Breeding two homozygous organisms produces offspring with predictable traits.", score: 20 },
    { word: "Heterozygous", definition: "Having two different alleles for a specific gene locus (e.g. Aa).", etymology: "From Greek 'heteros' (different) + 'zygon' (yoke).", funFact: "Heterozygous carriers of sickle cell gene exhibit increased resistance to malaria!", score: 20 },
    { word: "Dominant", definition: "Allele trait expressed in phenotype even when paired with a recessive allele.", etymology: "From Latin 'dominari' (to rule or master).", funFact: "Dominant traits only require one copy of the allele to express physically.", score: 10 },
    { word: "Recessive", definition: "Allele trait expressed in phenotype only when present in homozygous condition.", etymology: "From Latin 'recedere' (to recede or withdraw).", funFact: "Recessive alleles can remain hidden across generations in heterozygous carriers.", score: 10 },
    { word: "Mutation", definition: "Permanent alteration in the nucleotide sequence of an organism's genome.", etymology: "From Latin 'mutatio' (change or alteration).", funFact: "Mutations are the ultimate origin of all genetic diversity and evolutionary adaptation.", score: 10 },
    { word: "Point Mutation", definition: "Single nucleotide base substitution, insertion, or deletion in DNA.", etymology: "Descriptive term for a single spot mutation.", funFact: "A single point mutation in hemoglobin gene causes sickle cell anemia.", score: 20 },
    { word: "Frameshift Mutation", definition: "Insertion or deletion of nucleotides not in multiples of three altering reading frame.", etymology: "Descriptive term for shifting the triplet genetic reading frame.", funFact: "Frameshift mutations usually generate premature stop codons, creating truncated nonfunctional proteins.", score: 30 },
    { word: "Intron", definition: "Non-coding RNA gene segment spliced out before mRNA translation.", etymology: "From 'intragenic region'.", funFact: "Introns constitute over 90% of human protein-coding gene lengths!", score: 20 },
    { word: "Exon", definition: "Protein-coding gene segment retained in mature mRNA transcripts.", etymology: "From 'expressed region'.", funFact: "Alternative splicing lets single genes produce multiple protein isoforms.", score: 20 },
    { word: "Telomere", definition: "Repetitive DNA sequence cap at chromosome ends preventing degradation.", etymology: "From Greek 'telos' (end) + 'meros' (part).", funFact: "Telomeres shorten with age, functioning as a cellular aging clock.", score: 20 },
    { word: "Plasmid", definition: "Small circular extra-chromosomal DNA molecule capable of autonomous replication in bacteria.", etymology: "From Greek 'plasma' (formed material) + '-id'.", funFact: "Plasmids are essential tool vectors for gene cloning and recombinant DNA biotechnology.", score: 20 },
    { word: "CRISPR", definition: "Bacterial immune gene-editing system using Cas9 enzyme to cut target DNA.", etymology: "Acronym for Clustered Regularly Interspaced Short Palindromic Repeats.", funFact: "CRISPR-Cas9 won the Nobel Prize in Chemistry in 2020 for revolutionizing genome editing!", score: 30 },
    { word: "Epigenetics", definition: "Study of heritable phenotype changes not involving alterations in DNA sequence.", etymology: "From Greek 'epi' (upon/over) + 'genetics'.", funFact: "Environmental factors like stress and diet leave epigenetic marks modulating gene expression.", score: 30 },
    { word: "Histone", definition: "Spool-shaped protein around which eukaryotic DNA winds to form nucleosomes.", etymology: "From Greek 'histos' (tissue).", funFact: "Chemical modification of histones opens or closes chromatin structure for gene expression.", score: 20 },
    { word: "Operon", definition: "Cluster of genes under control of a single promoter operated as a functional unit in bacteria.", etymology: "From Latin 'operari' (to work) + unit suffix '-on'.", funFact: "The Lac operon in E. coli regulates lactose metabolism based on nutrient availability.", score: 30 }
  ],
  "photosynthesis-ecology": [
    { word: "Photosynthesis", definition: "Process by which autotrophs convert solar light energy, carbon dioxide, and water into glucose and oxygen.", etymology: "From Greek 'phos' (light) + 'synthesis' (putting together).", funFact: "Photosynthesis produces virtually all oxygen present in Earth's atmosphere!", score: 10 },
    { word: "Calvin Cycle", definition: "Light-independent reactions of photosynthesis fixing atmospheric CO2 into G3P sugars in the stroma.", etymology: "Eponymous, named after Melvin Calvin (1961 Nobel Prize).", funFact: "The Calvin cycle utilizes ATP and NADPH produced during light reactions.", score: 20 },
    { word: "Chlorophyll", definition: "Green photosynthetic pigment absorbing light energy within chloroplast thylakoids.", etymology: "From Greek 'chloros' (pale green) + 'phyllon' (leaf).", funFact: "Chlorophyll absorbs blue and red light, reflecting green wavelengths to our eyes.", score: 20 },
    { word: "Cellular Respiration", definition: "Metabolic pathway converting glucose chemical energy into cellular ATP through oxidation.", etymology: "From Latin 'cellula' (small room) + 'respirare' (breathe).", funFact: "Aerobic cellular respiration generates up to 36-38 ATP molecules per glucose molecule!", score: 20 },
    { word: "Glycolysis", definition: "Anaerobic metabolic pathway breaking down glucose into two pyruvate molecules in the cytosol.", etymology: "From Greek 'glykys' (sweet) + 'lysis' (loosening or breaking).", funFact: "Glycolysis is the ancient metabolic pathway shared by almost all living organisms.", score: 20 },
    { word: "Krebs Cycle", definition: "Mitochondrial matrix reaction cycle oxidizing acetyl-CoA to yield CO2, ATP, NADH, and FADH2.", etymology: "Eponymous, named after Hans Krebs (1937 Nobel laureate).", funFact: "Also known as the Citric Acid Cycle or TCA Cycle.", score: 30 },
    { word: "Citric Acid Cycle", definition: "Series of enzyme reactions generating high-energy electron carriers in mitochondria.", etymology: "Descriptive name for the 6-carbon intermediate citric acid.", funFact: "NADH and FADH2 generated here fuel the electron transport chain.", score: 20 },
    { word: "Electron Transport Chain", definition: "Series of membrane protein complexes transferring electrons to generate a proton gradient for ATP synthesis.", etymology: "Descriptive phrase for sequential electron transfer.", funFact: "Oxygen acts as the final electron acceptor at the end of the chain, forming water.", score: 30 },
    { word: "ATP Synthase", definition: "Rotary motor enzyme synthesizing ATP from ADP and inorganic phosphate driven by proton flux.", etymology: "From ATP + 'synthesis' + enzyme suffix '-ase'.", funFact: "ATP Synthase literally spins like a molecular turbine as protons flow through it!", score: 30 },
    { word: "Rubisco", definition: "Primary plant enzyme catalyzing carbon fixation step of Calvin Cycle.", etymology: "Acronym for Ribulose-1,5-bisphosphate carboxylase-oxygenase.", funFact: "Rubisco is considered the most abundant protein enzyme on Earth!", score: 30 },
    { word: "Stomata", definition: "Microscopic epidermal pores on leaves regulating gas exchange and transpiration.", etymology: "From Greek 'stoma' (mouth or opening).", funFact: "Guard cells inflate with water to open stomata and deflate to close them during drought.", score: 10 },
    { word: "Transpiration", definition: "Evaporation of water vapor from plant stomata driving xylem sap movement.", etymology: "From Latin 'trans' (across) + 'spirare' (breathe).", funFact: "A single mature oak tree transpires over 40,000 gallons of water per year!", score: 20 },
    { word: "Autotroph", definition: "Organism capable of synthesizing its own food from inorganic carbon sources.", etymology: "From Greek 'autos' (self) + 'trophe' (nourishment).", funFact: "Plants, algae, and cyanobacteria are photoautotrophs powering terrestrial ecosystems.", score: 20 },
    { word: "Heterotroph", definition: "Organism obtaining energy and nutrients by consuming other organisms.", etymology: "From Greek 'heteros' (other) + 'trophe' (nourishment).", funFact: "All animals, fungi, and most microorganisms are heterotrophs.", score: 20 },
    { word: "Ecosystem", definition: "Community of interacting living organisms and their abiotic physical environment.", etymology: "From Greek 'oikos' (home) + 'systema' (organized whole).", funFact: "Coral reefs support 25% of all marine species despite covering under 1% of ocean floor.", score: 10 },
    { word: "Biosphere", definition: "Global sum of all Earth ecosystems capable of supporting biological life.", etymology: "From Greek 'bios' (life) + 'sphaira' (globe).", funFact: "The biosphere spans from deep ocean trenches 36,000 feet deep up into high atmosphere.", score: 20 },
    { word: "Biodiversity", definition: "Variety of biological life across genetic, species, and ecosystem levels.", etymology: "From Greek 'bios' + Latin 'diversitas'.", funFact: "Tropical rainforests harbor over 50% of world terrestrial plant and animal species.", score: 20 },
    { word: "Biome", definition: "Large regional ecological community characterized by climate, vegetation, and fauna.", etymology: "From Greek 'bios' + biological group suffix '-ome'.", funFact: "Tundra, desert, tropical rainforest, and taiga are major terrestrial biomes.", score: 10 },
    { word: "Mutualism", definition: "Symbiotic ecological relationship in which both interacting species benefit.", etymology: "From Latin 'mutuus' (reciprocal).", funFact: "Mycorrhizal fungi and plant roots share nutrients in a crucial mutualistic bond.", score: 10 },
    { word: "Commensalism", definition: "Symbiotic interaction where one species benefits while the other is unaffected.", etymology: "From Latin 'com-' (together) + 'mensa' (table).", funFact: "Barnacles riding on whale skin gain mobility and filter-feeding access without harming the whale.", score: 20 },
    { word: "Parasitism", definition: "Symbiotic relationship where one organism benefits at the expense of its host.", etymology: "From Greek 'parasitos' (one who eats at another's table).", funFact: "Parasites outnumber free-living species in many wild animal ecosystems!", score: 10 },
    { word: "Keystone Species", definition: "Organism exerting disproportionately large influence on ecological community structure relative to abundance.", etymology: "From architectural 'keystone' holding arch stones together.", funFact: "Sea otters act as keystone species by eating sea urchins to preserve kelp forests.", score: 20 },
    { word: "Trophic Level", definition: "Feeding position occupied by an organism within an ecological food chain.", etymology: "From Greek 'trophe' (nourishment).", funFact: "Only ~10% of energy transfers up from one trophic level to the next higher level.", score: 20 },
    { word: "Carrying Capacity", definition: "Maximum population size of a species an environment can sustainably support.", etymology: "Ecological term denoting limit density.", funFact: "Resource limitation creates S-shaped logistic population growth curves.", score: 20 },
    { word: "Nitrogen Fixation", definition: "Conversion of inert atmospheric N2 gas into bioavailable ammonia by bacteria.", etymology: "From Nitrogen + Latin 'fixus' (bound).", funFact: "Rhizobium bacteria inside legume root nodules fix atmospheric nitrogen.", score: 30 }
  ],
  "anatomy-physiology": [
    { word: "Neuron", definition: "Specialized excitable nerve cell transmitting electrical and chemical signals.", etymology: "From Greek 'neuron' (nerve, tendon, or cord).", funFact: "Nerve impulses travel along myelinated human axons at speeds up to 268 mph!", score: 10 },
    { word: "Axon", definition: "Long slender nerve fiber conducting action potential impulses away from neuron cell body.", etymology: "From Greek 'axon' (axis or axle).", funFact: "The longest human axon stretches from the base of the spine down to the big toe!", score: 20 },
    { word: "Dendrite", definition: "Branched extension of a nerve cell receiving synaptic signals from adjacent neurons.", etymology: "From Greek 'dendron' (tree).", funFact: "Purkinje cells in the cerebellum possess up to 200,000 dendritic branches each!", score: 20 },
    { word: "Synapse", definition: "Microscopic junction where neurotransmitters pass chemical signals between nerve cells.", etymology: "From Greek 'synapsis' (clasping together).", funFact: "The human brain contains over 100 trillion synaptic connections!", score: 20 },
    { word: "Neurotransmitter", definition: "Chemical messenger released by synaptic vesicles to transmit signals across synapses.", etymology: "From Greek 'neuron' + Latin 'transmittere' (send across).", funFact: "Dopamine, serotonin, acetylcholine, and GABA are major human neurotransmitters.", score: 20 },
    { word: "Action Potential", definition: "Rapid electrical voltage spike passing down an axon during nerve impulse transmission.", etymology: "Descriptive physiological term.", funFact: "Action potentials obey an all-or-none law—either firing fully or not at all.", score: 30 },
    { word: "Myelin Sheath", definition: "Fatty insulating layer wrapped around nerve axons accelerating electrical signal conduction.", etymology: "From Greek 'myelos' (marrow) + Old English 'sceath'.", funFact: "Schwann cells in peripheral nerves wrap myelin sheaths around individual axons.", score: 20 },
    { word: "Red Blood Cell", definition: "Biconcave disc cell lacking a nucleus packed with hemoglobin transporting oxygen.", etymology: "From Old English 'read' + 'blod' + 'cell'.", funFact: "Human red blood cells circulate for ~120 days before being recycled by the spleen.", score: 10 },
    { word: "Erythrocyte", definition: "Scientific name for red blood cell specialized for blood gas transport.", etymology: "From Greek 'erythros' (red) + 'kytos' (cell).", funFact: "A single drop of human blood contains roughly 250 million erythrocytes!", score: 20 },
    { word: "White Blood Cell", definition: "Immune system defense cell protecting against foreign pathogens and infection.", etymology: "From Old English 'hwit' + 'blod' + 'cell'.", funFact: "White blood cells can crawl through capillary walls into infected tissues via diapedesis.", score: 10 },
    { word: "Leukocyte", definition: "Scientific term for white blood cell comprising granulocytes and lymphocytes.", etymology: "From Greek 'leukos' (white) + 'kytos' (cell).", funFact: "Leukocyte counts surge rapidly during acute bacterial or viral infections.", score: 20 },
    { word: "Hemoglobin", definition: "Iron-containing protein inside red blood cells binding oxygen for tissue transport.", etymology: "From Greek 'haima' (blood) + Latin 'globus' (sphere).", funFact: "Each hemoglobin protein can carry up to four oxygen molecules simultaneously.", score: 20 },
    { word: "Homeostasis", definition: "Maintenance of stable, balanced internal physiological conditions in living organisms.", etymology: "From Greek 'homoios' (similar) + 'stasis' (standing still).", funFact: "Sweating, shivering, and insulin secretion are negative feedback mechanisms maintaining homeostasis.", score: 30 },
    { word: "Nephron", definition: "Microscopic functional filtering unit of the kidney producing urine.", etymology: "From Greek 'nephros' (kidney).", funFact: "Each human kidney contains approximately 1 million individual filtering nephrons!", score: 20 },
    { word: "Alveoli", definition: "Tiny balloon-like air sacs in lungs where gas exchange between air and blood occurs.", etymology: "From Latin 'alveolus' (little cavity).", funFact: "Spreading all human alveoli flat would cover an entire tennis court surface!", score: 20 },
    { word: "Peristalsis", definition: "Wavelike smooth muscle contraction propelling food along the digestive tract.", etymology: "From Greek 'peri' (around) + 'stalsis' (constriction).", funFact: "Peristalsis operates independently of gravity, allowing swallowing even while upside down!", score: 20 },
    { word: "Capillary", definition: "Microscopic blood vessel facilitating gas, nutrient, and waste exchange with tissues.", etymology: "From Latin 'capillaris' (resembling a hair).", funFact: "Capillaries are so narrow that red blood cells pass through single file!", score: 10 },
    { word: "Insulin", definition: "Pancreatic hormone lowering blood glucose levels by promoting cellular glucose uptake.", etymology: "From Latin 'insula' (island), referring to Islets of Langerhans.", funFact: "Frederick Banting and Charles Best discovered insulin in 1921, saving millions with diabetes.", score: 20 },
    { word: "Glucagon", definition: "Pancreatic hormone raising blood glucose levels by stimulating liver glycogen breakdown.", etymology: "From 'glucose' + Greek 'agon' (lead/drive).", funFact: "Glucagon acts in direct opposition to insulin to stabilize blood sugar.", score: 20 },
    { word: "Hormone", definition: "Chemical signaling molecule secreted into bloodstream regulating distant target organs.", etymology: "From Greek 'hormao' (to set in motion or excite).", funFact: "Hormones regulate metabolism, growth, mood, reproduction, and tissue function.", score: 10 }
  ],
  "microbiology-biotech": [
    { word: "Bacteria", definition: "Domain of single-celled prokaryotic microorganisms lacking membrane-bound nuclei.", etymology: "From Greek 'bakterion' (small staff or rod).", funFact: "Bacterial cells outnumber human cells inside the human body microbiome!", score: 10 },
    { word: "Virus", definition: "Submicroscopic infectious agent consisting of nucleic acid inside a protein coat (capsid).", etymology: "From Latin 'virus' (poison or slimy liquid).", funFact: "Viruses are not considered living organisms because they require host cells to replicate.", score: 10 },
    { word: "Bacteriophage", definition: "Specialized virus that infects and replicates exclusively inside bacterial cells.", etymology: "From 'bacteria' + Greek 'phagein' (to eat).", funFact: "Bacteriophages are the most abundant biological entities on Earth, numbering 10^31!", score: 30 },
    { word: "Capsid", definition: "Protein shell enclosing genetic material of a viral particle.", etymology: "From Latin 'capsa' (box or chest).", funFact: "Capsids are assembled from repeated protein subunits called capsomeres.", score: 20 },
    { word: "Antibiotic", definition: "Substance that kills or inhibits growth of bacterial microorganisms.", etymology: "From Greek 'anti' (against) + 'bios' (life).", funFact: "Alexander Fleming discovered penicillin in 1928 from Penicillium mold contamination.", score: 10 },
    { word: "Antibiotic Resistance", definition: "Ability of bacteria to survive exposure to antibiotics through genetic mutation or gene transfer.", etymology: "Descriptive medical microbiology term.", funFact: "Overuse of antibiotics accelerates natural selection of resistant superbug strains.", score: 20 },
    { word: "Vaccine", definition: "Biological preparation training immune systems to recognize specific pathogens without causing illness.", etymology: "From Latin 'vacca' (cow), referencing Edward Jenner's cowpox smallpox vaccine.", funFact: "Vaccines led to the total global eradication of smallpox in 1980.", score: 10 },
    { word: "Antibody", definition: "Y-shaped immune system protein synthesized by B cells binding specific foreign antigens.", etymology: "From 'anti-' + 'body' (translation of German 'Antikörper').", funFact: "The human body can generate billions of distinct antibody variations!", score: 20 },
    { word: "Antigen", definition: "Molecule or pathogen surface marker capable of inducing an immune response.", etymology: "Shortened from 'antibody generator'.", funFact: "Antigens trigger B cells and T cells to activate adaptive immunity.", score: 10 },
    { word: "Pathogen", definition: "Microorganism such as bacterium, virus, fungus, or parasite causing disease.", etymology: "From Greek 'pathos' (suffering) + '-gen' (producer).", funFact: "Most bacteria on Earth are completely harmless or beneficial to humans!", score: 10 },
    { word: "Plasmid Vector", definition: "DNA plasmid engineered to introduce foreign genes into host cells.", etymology: "From 'plasmid' + Latin 'vector' (carrier).", funFact: "Plasmid vectors express human insulin proteins inside E. coli bioreactors.", score: 20 },
    { word: "PCR", definition: "Polymerase Chain Reaction; technique amplifying specific DNA sequences exponentially.", etymology: "Acronym for Polymerase Chain Reaction.", funFact: "Kary Mullis invented PCR in 1983 and won the Nobel Prize in Chemistry.", score: 20 },
    { word: "Gel Electrophoresis", definition: "Laboratory technique separating DNA, RNA, or protein fragments by size using electric current.", etymology: "From German 'electro-' + Greek 'phoresis' (carrying).", funFact: "Smaller DNA fragments migrate faster through agarose gel pores toward the positive pole.", score: 30 },
    { word: "Restriction Enzyme", definition: "Bacterial enzyme cutting DNA double strands at specific recognition nucleotide sequences.", etymology: "Descriptive enzyme name restricting viral DNA infection.", funFact: "Restriction enzymes function as molecular scissors for recombinant DNA technology.", score: 20 }
  ]
};

// General fallback terms for custom science topics
export const GENERAL_SCIENCE_WORDS: OfflineWordInfo[] = [
  { word: "Hypothesis", definition: "Proposed testable explanation for an observable natural phenomenon.", etymology: "From Greek 'hypo' (under) + 'thesis' (proposition).", funFact: "A scientific hypothesis must be falsifiable through experimental testing.", score: 10 },
  { word: "Experiment", definition: "Controlled procedure conducted to test hypotheses or discover scientific facts.", etymology: "From Latin 'experimentum' (trial or proof).", funFact: "Controlled experiments isolate independent variables to establish causality.", score: 10 },
  { word: "Metabolism", definition: "Sum total of chemical reactions sustaining life in biological cells.", etymology: "From Greek 'metabole' (change or transformation).", funFact: "Metabolism comprises anabolic building reactions and catabolic breakdown reactions.", score: 20 },
  { word: "Equilibrium", definition: "Balanced state where opposing chemical or physical forces equalize.", etymology: "From Latin 'aequus' (equal) + 'libra' (balance).", funFact: "Dynamic equilibrium means forward and reverse reactions proceed at identical rates.", score: 20 },
  { word: "Symbiosis", definition: "Close biological interaction between organisms of different species.", etymology: "From Greek 'syn' (together) + 'bios' (life).", funFact: "Symbiosis includes mutualistic, commensal, and parasitic relationships.", score: 20 },
  { word: "Epithelium", definition: "Membranous cell tissue lining organs, glands, and outer body surfaces.", etymology: "From Greek 'epi' (upon) + 'thele' (nipple/layer).", funFact: "Human skin is the largest epithelial tissue organ in the body.", score: 20 },
  { word: "Substrate", definition: "Specific reactant molecule upon which an enzyme acts at its active site.", etymology: "From Latin 'substratum' (spread under).", funFact: "Enzyme active sites bind substrates with lock-and-key or induced-fit specificity.", score: 20 },
  { word: "Biochemistry", definition: "Scientific study of chemical substances and vital processes in living organisms.", etymology: "From Greek 'bios' (life) + Alchemy/Chemistry.", funFact: "Biochemistry unravels cellular metabolism, genetics, and molecular biology.", score: 20 }
];

// Combine all words from all dictionaries into a master list for rapid searching
export function getAllBiologyWords(): OfflineWordInfo[] {
  const masterList: OfflineWordInfo[] = [];
  const wordSet = new Set<string>();

  for (const list of Object.values(SCIENCE_DICTIONARIES)) {
    for (const item of list) {
      if (!wordSet.has(item.word.toLowerCase())) {
        wordSet.add(item.word.toLowerCase());
        masterList.push(item);
      }
    }
  }

  for (const item of GENERAL_SCIENCE_WORDS) {
    if (!wordSet.has(item.word.toLowerCase())) {
      wordSet.add(item.word.toLowerCase());
      masterList.push(item);
    }
  }

  return masterList;
}

export function getOfflineWordList(topicKey?: string): OfflineWordInfo[] {
  if (!topicKey) return getAllBiologyWords();
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

  return getAllBiologyWords();
}

// Smart term search across the entire dictionary
export function findBiologyTerm(rawInput: string): OfflineWordInfo | null {
  const cleanInput = rawInput.trim().toLowerCase().replace(/[^a-z0-9\s\-]/g, "").replace(/\s+/g, " ");
  if (!cleanInput) return null;

  const masterList = getAllBiologyWords();

  // 1. Direct exact match
  let match = masterList.find((item) => item.word.toLowerCase() === cleanInput);
  if (match) return match;

  // 2. Singular / Plural variation match (e.g. "cell walls" -> "cell wall", "mitochondrias" -> "mitochondria")
  const singular = cleanInput.endsWith("s") ? cleanInput.slice(0, -1) : cleanInput;
  match = masterList.find((item) => item.word.toLowerCase() === singular);
  if (match) return match;

  if (cleanInput.endsWith("es")) {
    const singularEs = cleanInput.slice(0, -2);
    match = masterList.find((item) => item.word.toLowerCase() === singularEs);
    if (match) return match;
  }

  // 3. Substring / multi-word phrase match
  match = masterList.find((item) => {
    const dictLower = item.word.toLowerCase();
    return dictLower === cleanInput || cleanInput.includes(dictLower) || dictLower.includes(cleanInput);
  });
  if (match) return match;

  return null;
}

// 1. OFFLINE STUDENT WORD VALIDATION
export function validateStudentWordOffline(topic: string, rawInput: string, usedWords: string[]) {
  const cleanInput = rawInput.trim().toLowerCase().replace(/[^a-z0-9\s\-]/g, "").replace(/\s+/g, " ");
  
  if (!cleanInput || cleanInput.length < 2) {
    return {
      studentValidation: {
        isValid: false,
        reason: "Word is too short or invalid. Please enter a valid science term.",
        normalizedWord: rawInput.trim(),
        definition: "",
        etymology: "",
        score: 0
      }
    };
  }

  // Check if already used
  const isAlreadyUsed = usedWords.some((w) => {
    const norm = w.trim().toLowerCase().replace(/[^a-z0-9\s\-]/g, "").replace(/\s+/g, " ");
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

  // Search dictionary
  const dictMatch = findBiologyTerm(rawInput);

  if (dictMatch) {
    return {
      studentValidation: {
        isValid: true,
        reason: "Valid biology / science term!",
        normalizedWord: dictMatch.word,
        definition: dictMatch.definition,
        etymology: dictMatch.etymology,
        score: dictMatch.score || 20,
        matchedBingoTileId: dictMatch.word.toLowerCase()
      }
    };
  }

  // Fallback heuristic for legitimate multi-word or single-word biology terms
  if (cleanInput.length >= 2 && /^[a-z\s\-]+$/i.test(cleanInput)) {
    const formattedWord = rawInput
      .trim()
      .split(/\s+/)
      .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
      .join(" ");

    return {
      studentValidation: {
        isValid: true,
        reason: "Valid biology terminology!",
        normalizedWord: formattedWord,
        definition: `Scientific concept relating to biology and ${topic.replace(/-/g, " ")}.`,
        etymology: `Derived from classical Greek or Latin scientific roots in biological science.`,
        score: 15,
        matchedBingoTileId: cleanInput.replace(/\s+/g, "-")
      }
    };
  }

  return {
    studentValidation: {
      isValid: false,
      reason: `"${rawInput.trim()}" was not recognized as a valid biological or scientific term.`,
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
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/[^a-z0-9\s\-]/g, "").replace(/\s+/g, " "));

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

  // Fallback to all biology words if topic pool is exhausted
  const allWords = getAllBiologyWords();
  const availableAll = allWords.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (availableAll.length > 0) {
    const chosen = availableAll[Math.floor(Math.random() * availableAll.length)];
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
    definition: "Study of energy flow and transformation within biological organisms.",
    etymology: "From Greek 'bios' (life) + 'energeia' (activity).",
    funFact: "Bioenergetics governs cellular respiration and photosynthesis metabolic rates.",
    score: 25,
    matchedBingoTileId: "bioenergetics"
  };
}

// 3. OFFLINE 5x5 BINGO BOARD GENERATION
export function generateBingoTilesOffline(topic: string) {
  let pool = getOfflineWordList(topic);
  if (pool.length < 25) {
    pool = getAllBiologyWords();
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

// 4. OFFLINE HINT GENERATION
export function getOfflineHint(topic: string, usedWords: string[]): string {
  const dictionary = getOfflineWordList(topic);
  const normalizedUsed = usedWords.map((w) => w.trim().toLowerCase().replace(/[^a-z0-9\s\-]/g, "").replace(/\s+/g, " "));
  const unused = dictionary.filter((w) => !normalizedUsed.includes(w.word.toLowerCase()));

  if (unused.length > 0) {
    const word = unused[Math.floor(Math.random() * unused.length)];
    return `Hint: Think about a term starting with '${word.word.charAt(0)}': ${word.definition}`;
  }

  return `Hint: Enter key biology terms related to cell structure, genetics, metabolism, or organ systems.`;
}
