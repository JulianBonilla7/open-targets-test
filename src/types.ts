export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type ApiVersion = {
  __typename?: "APIVersion"
  x: Scalars["String"]
  y: Scalars["String"]
  z: Scalars["String"]
}

/** Significant adverse event entries */
export type AdverseEvent = {
  __typename?: "AdverseEvent"
  /** Meddra term on adverse event */
  name: Scalars["String"]
  /** 8 digit unique meddra identification number */
  meddraCode?: Maybe<Scalars["String"]>
  /** Number of reports mentioning drug and adverse event */
  count: Scalars["Int"]
  /** Log-likelihood ratio */
  logLR: Scalars["Float"]
}

/** Significant adverse events inferred from FAERS reports */
export type AdverseEvents = {
  __typename?: "AdverseEvents"
  /** Total significant adverse events */
  count: Scalars["Int"]
  /** LLR critical value to define significance */
  criticalValue: Scalars["Float"]
  /** Significant adverse event entries */
  rows: Array<AdverseEvent>
}

export type Aggregation = {
  __typename?: "Aggregation"
  key: Scalars["String"]
  uniques: Scalars["Int"]
  aggs?: Maybe<Array<Aggregation>>
}

export type AggregationFilter = {
  name: Scalars["String"]
  path: Array<Scalars["String"]>
}

export type Aggregations = {
  __typename?: "Aggregations"
  uniques: Scalars["Int"]
  aggs: Array<NamedAggregation>
}

/** Associated Disease Entity */
export type AssociatedDisease = {
  __typename?: "AssociatedDisease"
  score: Scalars["Float"]
  datatypeScores: Array<ScoredComponent>
  datasourceScores: Array<ScoredComponent>
  /** Disease */
  disease: Disease
}

export type AssociatedDiseases = {
  __typename?: "AssociatedDiseases"
  datasources: Array<DatasourceSettings>
  aggregations?: Maybe<Aggregations>
  count: Scalars["Int"]
  /** Associated Targets using (On the fly method) */
  rows: Array<AssociatedDisease>
}

/** Associated Target Entity */
export type AssociatedTarget = {
  __typename?: "AssociatedTarget"
  score: Scalars["Float"]
  datatypeScores: Array<ScoredComponent>
  datasourceScores: Array<ScoredComponent>
  /** Target */
  target: Target
}

export type AssociatedTargets = {
  __typename?: "AssociatedTargets"
  datasources: Array<DatasourceSettings>
  aggregations?: Maybe<Aggregations>
  count: Scalars["Int"]
  /** Associated Targets using (On the fly method) */
  rows: Array<AssociatedTarget>
}

export type BiologicalModels = {
  __typename?: "BiologicalModels"
  allelicComposition: Scalars["String"]
  geneticBackground: Scalars["String"]
  id?: Maybe<Scalars["String"]>
  literature?: Maybe<Array<Scalars["String"]>>
}

export type CancerHallmark = {
  __typename?: "CancerHallmark"
  description: Scalars["String"]
  impact?: Maybe<Scalars["String"]>
  label: Scalars["String"]
  pmid: Scalars["Int"]
}

export type CellType = {
  __typename?: "CellType"
  reliability: Scalars["Boolean"]
  name: Scalars["String"]
  level: Scalars["Int"]
}

export type ChemicalProbe = {
  __typename?: "ChemicalProbe"
  id: Scalars["String"]
  control?: Maybe<Scalars["String"]>
  drugId?: Maybe<Scalars["String"]>
  mechanismOfAction?: Maybe<Array<Scalars["String"]>>
  isHighQuality: Scalars["Boolean"]
  origin?: Maybe<Array<Scalars["String"]>>
  probeMinerScore?: Maybe<Scalars["Float"]>
  probesDrugsScore?: Maybe<Scalars["Float"]>
  scoreInCells?: Maybe<Scalars["Float"]>
  scoreInOrganisms?: Maybe<Scalars["Float"]>
  targetFromSourceId: Scalars["String"]
  urls: Array<ChemicalProbeUrl>
}

export type ChemicalProbeUrl = {
  __typename?: "ChemicalProbeUrl"
  niceName: Scalars["String"]
  url?: Maybe<Scalars["String"]>
}

export type Constraint = {
  __typename?: "Constraint"
  constraintType: Scalars["String"]
  exp?: Maybe<Scalars["Float"]>
  obs?: Maybe<Scalars["Int"]>
  oe?: Maybe<Scalars["Float"]>
  oeLower?: Maybe<Scalars["Float"]>
  oeUpper?: Maybe<Scalars["Float"]>
  score?: Maybe<Scalars["Float"]>
  upperBin?: Maybe<Scalars["Int"]>
  upperBin6?: Maybe<Scalars["Int"]>
  upperRank?: Maybe<Scalars["Int"]>
}

export type DataVersion = {
  __typename?: "DataVersion"
  year: Scalars["String"]
  month: Scalars["String"]
  iteration: Scalars["String"]
}

export type DatasourceSettings = {
  __typename?: "DatasourceSettings"
  id: Scalars["String"]
  weight: Scalars["Float"]
  propagate: Scalars["Boolean"]
}

export type DatasourceSettingsInput = {
  id: Scalars["String"]
  weight: Scalars["Float"]
  propagate: Scalars["Boolean"]
}

export type DepMapEssentiality = {
  __typename?: "DepMapEssentiality"
  screens: Array<GeneEssentialityScreen>
  tissueId?: Maybe<Scalars["String"]>
  tissueName?: Maybe<Scalars["String"]>
}

/** Disease or phenotype entity */
export type Disease = {
  __typename?: "Disease"
  /** Open Targets disease id */
  id: Scalars["String"]
  /** Disease name */
  name: Scalars["String"]
  /** Disease description */
  description?: Maybe<Scalars["String"]>
  /** List of external cross reference IDs */
  dbXRefs?: Maybe<Array<Scalars["String"]>>
  /** List of direct location Disease terms */
  directLocationIds?: Maybe<Array<Scalars["String"]>>
  /** List of indirect location Disease terms */
  indirectLocationIds?: Maybe<Array<Scalars["String"]>>
  /** List of obsolete diseases */
  obsoleteTerms?: Maybe<Array<Scalars["String"]>>
  /** Disease synonyms */
  synonyms?: Maybe<Array<DiseaseSynonyms>>
  ancestors: Array<Scalars["String"]>
  descendants: Array<Scalars["String"]>
  /** Ancestor therapeutic area disease entities in ontology */
  therapeuticAreas: Array<Disease>
  /** Disease parents entities in ontology */
  parents: Array<Disease>
  /** Disease children entities in ontology */
  children: Array<Disease>
  /** Direct Location disease terms */
  directLocations: Array<Disease>
  /** Indirect Location disease terms */
  indirectLocations: Array<Disease>
  /** Return similar labels using a model Word2CVec trained with PubMed */
  similarEntities: Array<Similarity>
  /** Return the list of publications that mention the main entity, alone or in combination with other entities */
  literatureOcurrences: Publications
  /** Is disease a therapeutic area itself */
  isTherapeuticArea: Scalars["Boolean"]
  /** Phenotype from HPO index */
  phenotypes?: Maybe<DiseaseHpOs>
  /** The complete list of all possible datasources */
  evidences: Evidences
  /** RNA and Protein baseline expression */
  otarProjects: Array<OtarProject>
  /** Clinical precedence for investigational or approved drugs indicated for disease and curated mechanism of action */
  knownDrugs?: Maybe<KnownDrugs>
  /** associations on the fly */
  associatedTargets: AssociatedTargets
}

/** Disease or phenotype entity */
export type DiseaseSimilarEntitiesArgs = {
  additionalIds?: Maybe<Array<Scalars["String"]>>
  entityNames?: Maybe<Array<Scalars["String"]>>
  threshold?: Maybe<Scalars["Float"]>
  size?: Maybe<Scalars["Int"]>
}

/** Disease or phenotype entity */
export type DiseaseLiteratureOcurrencesArgs = {
  additionalIds?: Maybe<Array<Scalars["String"]>>
  startYear?: Maybe<Scalars["Int"]>
  startMonth?: Maybe<Scalars["Int"]>
  endYear?: Maybe<Scalars["Int"]>
  endMonth?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Disease or phenotype entity */
export type DiseasePhenotypesArgs = {
  page?: Maybe<Pagination>
}

/** Disease or phenotype entity */
export type DiseaseEvidencesArgs = {
  ensemblIds: Array<Scalars["String"]>
  enableIndirect?: Maybe<Scalars["Boolean"]>
  datasourceIds?: Maybe<Array<Scalars["String"]>>
  size?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Disease or phenotype entity */
export type DiseaseKnownDrugsArgs = {
  freeTextQuery?: Maybe<Scalars["String"]>
  size?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Disease or phenotype entity */
export type DiseaseAssociatedTargetsArgs = {
  Bs?: Maybe<Array<Scalars["String"]>>
  enableIndirect?: Maybe<Scalars["Boolean"]>
  datasources?: Maybe<Array<DatasourceSettingsInput>>
  aggregationFilters?: Maybe<Array<AggregationFilter>>
  BFilter?: Maybe<Scalars["String"]>
  orderByScore?: Maybe<Scalars["String"]>
  page?: Maybe<Pagination>
}

export type DiseaseCellLine = {
  __typename?: "DiseaseCellLine"
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  tissue?: Maybe<Scalars["String"]>
  tissueId?: Maybe<Scalars["String"]>
}

/** Disease and phenotypes annotations */
export type DiseaseHpo = {
  __typename?: "DiseaseHPO"
  /** List of phenotype annotations. */
  evidence: Array<DiseaseHpoEvidences>
  /** Phenotype entity */
  phenotypeHPO?: Maybe<Hpo>
  /** Disease Entity */
  phenotypeEFO?: Maybe<Disease>
}

/** the HPO project provides a large set of phenotype annotations. Source: Phenotype.hpoa */
export type DiseaseHpoEvidences = {
  __typename?: "DiseaseHPOEvidences"
  /** One of P (Phenotypic abnormality), I (inheritance), C (onset and clinical course). Might be null (MONDO) */
  aspect?: Maybe<Scalars["String"]>
  /** This refers to the center or user making the annotation and the date on which the annotation was made */
  bioCuration?: Maybe<Scalars["String"]>
  /** This field refers to the database and database identifier. EG. OMIM */
  diseaseFromSourceId: Scalars["String"]
  /** Related name from the field diseaseFromSourceId */
  diseaseFromSource: Scalars["String"]
  /** This field indicates the level of evidence supporting the annotation. */
  evidenceType?: Maybe<Scalars["String"]>
  /** A term-id from the HPO-sub-ontology */
  frequency?: Maybe<Scalars["String"]>
  /** This optional field can be used to qualify the annotation. Values: [True or False] */
  qualifierNot: Scalars["Boolean"]
  /** This field indicates the source of the information used for the annotation (phenotype.hpoa) */
  references: Array<Scalars["String"]>
  /** This field contains the strings MALE or FEMALE if the annotation in question is limited to males or females. */
  sex?: Maybe<Scalars["String"]>
  /** Possible source mapping: HPO or MONDO */
  resource: Scalars["String"]
  /** HP terms from the Clinical modifier subontology */
  modifiers: Array<Hpo>
  /** A term-id from the HPO-sub-ontology below the term Age of onset. */
  onset: Array<Hpo>
  /** HPO Entity */
  frequencyHPO?: Maybe<Hpo>
}

/** List of Phenotypes associated with the disease */
export type DiseaseHpOs = {
  __typename?: "DiseaseHPOs"
  /** Number of entries */
  count: Scalars["Int"]
  /** List of Disease and phenotypes annotations */
  rows: Array<DiseaseHpo>
}

export type DiseaseSynonyms = {
  __typename?: "DiseaseSynonyms"
  relation: Scalars["String"]
  terms: Array<Scalars["String"]>
}

/** Drug/Molecule entity */
export type Drug = {
  __typename?: "Drug"
  /** Open Targets molecule id */
  id: Scalars["String"]
  /** Molecule preferred name */
  name: Scalars["String"]
  /** Molecule synonyms */
  synonyms: Array<Scalars["String"]>
  /** Drug trade names */
  tradeNames: Array<Scalars["String"]>
  /** Year drug was approved for the first time */
  yearOfFirstApproval?: Maybe<Scalars["Int"]>
  /** Drug modality */
  drugType: Scalars["String"]
  /** Alias for maximumClinicalTrialPhase == 4 */
  isApproved?: Maybe<Scalars["Boolean"]>
  crossReferences?: Maybe<Array<DrugReferences>>
  /** Maximum phase observed in clinical trial records and post-marketing package inserts */
  maximumClinicalTrialPhase?: Maybe<Scalars["Float"]>
  /** Has drug been withdrawn from the market */
  hasBeenWithdrawn: Scalars["Boolean"]
  /** Alert on life-threteaning drug side effects provided by FDA */
  blackBoxWarning: Scalars["Boolean"]
  /** Drug description */
  description?: Maybe<Scalars["String"]>
  /** ChEMBL ID of parent molecule */
  parentMolecule?: Maybe<Drug>
  /** Chembl IDs of molecules that descend from current molecule. */
  childMolecules: Array<Drug>
  /** Indications for which there is a phase IV clinical trial */
  approvedIndications?: Maybe<Array<Scalars["String"]>>
  /** Warnings present on drug as identified by ChEMBL. */
  drugWarnings: Array<DrugWarning>
  /** Return similar labels using a model Word2CVec trained with PubMed */
  similarEntities: Array<Similarity>
  /** Return the list of publications that mention the main entity, alone or in combination with other entities */
  literatureOcurrences: Publications
  /** Mechanisms of action to produce intended pharmacological effects. Curated from scientific literature and post-marketing package inserts */
  mechanismsOfAction?: Maybe<MechanismsOfAction>
  /** Investigational and approved indications curated from clinical trial records and post-marketing package inserts */
  indications?: Maybe<Indications>
  /** Curated Clinical trial records and and post-marketing package inserts with a known mechanism of action */
  knownDrugs?: Maybe<KnownDrugs>
  /** Significant adverse events inferred from FAERS reports */
  adverseEvents?: Maybe<AdverseEvents>
  /** Therapeutic indications for drug based on clinical trial data or post-marketed drugs, when mechanism of action is known" */
  linkedDiseases?: Maybe<LinkedDiseases>
  /** Molecule targets based on drug mechanism of action */
  linkedTargets?: Maybe<LinkedTargets>
}

/** Drug/Molecule entity */
export type DrugSimilarEntitiesArgs = {
  additionalIds?: Maybe<Array<Scalars["String"]>>
  entityNames?: Maybe<Array<Scalars["String"]>>
  threshold?: Maybe<Scalars["Float"]>
  size?: Maybe<Scalars["Int"]>
}

/** Drug/Molecule entity */
export type DrugLiteratureOcurrencesArgs = {
  additionalIds?: Maybe<Array<Scalars["String"]>>
  startYear?: Maybe<Scalars["Int"]>
  startMonth?: Maybe<Scalars["Int"]>
  endYear?: Maybe<Scalars["Int"]>
  endMonth?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Drug/Molecule entity */
export type DrugKnownDrugsArgs = {
  freeTextQuery?: Maybe<Scalars["String"]>
  size?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Drug/Molecule entity */
export type DrugAdverseEventsArgs = {
  page?: Maybe<Pagination>
}

export type DrugReferences = {
  __typename?: "DrugReferences"
  source: Scalars["String"]
  reference: Array<Scalars["String"]>
}

/** Drug warnings as calculated by ChEMBL */
export type DrugWarning = {
  __typename?: "DrugWarning"
  /** High level toxicity category by Meddra System Organ Class */
  toxicityClass?: Maybe<Scalars["String"]>
  chemblIds?: Maybe<Array<Scalars["String"]>>
  /** Country issuing warning */
  country?: Maybe<Scalars["String"]>
  /** Reason for withdrawal */
  description?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Int"]>
  /** Source of withdrawal information */
  references?: Maybe<Array<DrugWarningReference>>
  /** Either 'black box warning' or 'withdrawn' */
  warningType: Scalars["String"]
  /** Year of withdrawal */
  year?: Maybe<Scalars["Int"]>
  /**  label of the curated EFO term that represents the adverse outcome */
  efoTerm?: Maybe<Scalars["String"]>
  /** ID of the curated EFO term that represents the adverse outcome */
  efoId?: Maybe<Scalars["String"]>
  /** ID of the curated EFO term that represents the high level warning class */
  efoIdForWarningClass?: Maybe<Scalars["String"]>
  meddraSocCode?: Maybe<Scalars["String"]>
}

export type DrugWarningReference = {
  __typename?: "DrugWarningReference"
  id: Scalars["String"]
  source: Scalars["String"]
  url: Scalars["String"]
}

export type EntityUnionType = Target | Drug | Disease

/** Evidence for a Target-Disease pair */
export type Evidence = {
  __typename?: "Evidence"
  /** Evidence identifier */
  id: Scalars["String"]
  /** Evidence score */
  score: Scalars["Float"]
  /** Target evidence */
  target: Target
  /** Disease evidence */
  disease: Disease
  biomarkerName?: Maybe<Scalars["String"]>
  biomarkers?: Maybe<Biomarkers>
  diseaseCellLines?: Maybe<Array<DiseaseCellLine>>
  cohortPhenotypes?: Maybe<Array<Scalars["String"]>>
  targetInModel?: Maybe<Scalars["String"]>
  reactionId?: Maybe<Scalars["String"]>
  reactionName?: Maybe<Scalars["String"]>
  projectId?: Maybe<Scalars["String"]>
  /** Variant evidence */
  variantId?: Maybe<Scalars["String"]>
  /** Variant dbSNP identifier */
  variantRsId?: Maybe<Scalars["String"]>
  /** Confidence interval lower-bound   */
  oddsRatioConfidenceIntervalLower?: Maybe<Scalars["Float"]>
  /** Sample size */
  studySampleSize?: Maybe<Scalars["Int"]>
  variantAminoacidDescriptions?: Maybe<Array<Scalars["String"]>>
  mutatedSamples?: Maybe<Array<EvidenceVariation>>
  drug?: Maybe<Drug>
  drugFromSource?: Maybe<Scalars["String"]>
  drugResponse?: Maybe<Disease>
  cohortShortName?: Maybe<Scalars["String"]>
  diseaseModelAssociatedModelPhenotypes?: Maybe<Array<LabelledElement>>
  diseaseModelAssociatedHumanPhenotypes?: Maybe<Array<LabelledElement>>
  significantDriverMethods?: Maybe<Array<Scalars["String"]>>
  pValueExponent?: Maybe<Scalars["Int"]>
  log2FoldChangePercentileRank?: Maybe<Scalars["Int"]>
  biologicalModelAllelicComposition?: Maybe<Scalars["String"]>
  confidence?: Maybe<Scalars["String"]>
  clinicalPhase?: Maybe<Scalars["Float"]>
  resourceScore?: Maybe<Scalars["Float"]>
  variantFunctionalConsequence?: Maybe<SequenceOntologyTerm>
  variantFunctionalConsequenceFromQtlId?: Maybe<SequenceOntologyTerm>
  biologicalModelGeneticBackground?: Maybe<Scalars["String"]>
  urls?: Maybe<Array<LabelledUri>>
  /** list of pub med publications ids */
  literature?: Maybe<Array<Scalars["String"]>>
  /** list of central pub med publications ids */
  pubMedCentralIds?: Maybe<Array<Scalars["String"]>>
  studyCases?: Maybe<Scalars["Int"]>
  studyOverview?: Maybe<Scalars["String"]>
  allelicRequirements?: Maybe<Array<Scalars["String"]>>
  datasourceId: Scalars["String"]
  datatypeId: Scalars["String"]
  oddsRatioConfidenceIntervalUpper?: Maybe<Scalars["Float"]>
  clinicalStatus?: Maybe<Scalars["String"]>
  log2FoldChangeValue?: Maybe<Scalars["Float"]>
  oddsRatio?: Maybe<Scalars["Float"]>
  cohortDescription?: Maybe<Scalars["String"]>
  publicationYear?: Maybe<Scalars["Int"]>
  diseaseFromSource?: Maybe<Scalars["String"]>
  diseaseFromSourceId?: Maybe<Scalars["String"]>
  targetFromSourceId?: Maybe<Scalars["String"]>
  targetModulation?: Maybe<Scalars["String"]>
  textMiningSentences?: Maybe<Array<EvidenceTextMiningSentence>>
  studyId?: Maybe<Scalars["String"]>
  clinicalSignificances?: Maybe<Array<Scalars["String"]>>
  cohortId?: Maybe<Scalars["String"]>
  pValueMantissa?: Maybe<Scalars["Float"]>
  pathways?: Maybe<Array<Pathway>>
  publicationFirstAuthor?: Maybe<Scalars["String"]>
  alleleOrigins?: Maybe<Array<Scalars["String"]>>
  biologicalModelId?: Maybe<Scalars["String"]>
  biosamplesFromSource?: Maybe<Array<Scalars["String"]>>
  diseaseFromSourceMappedId?: Maybe<Scalars["String"]>
  beta?: Maybe<Scalars["Float"]>
  betaConfidenceIntervalLower?: Maybe<Scalars["Float"]>
  betaConfidenceIntervalUpper?: Maybe<Scalars["Float"]>
  studyStartDate?: Maybe<Scalars["String"]>
  studyStopReason?: Maybe<Scalars["String"]>
  /** Predicted reason(s) why the study has been stopped based on studyStopReason */
  studyStopReasonCategories?: Maybe<Array<Scalars["String"]>>
  targetFromSource?: Maybe<Scalars["String"]>
  cellLineBackground?: Maybe<Scalars["String"]>
  contrast?: Maybe<Scalars["String"]>
  crisprScreenLibrary?: Maybe<Scalars["String"]>
  cellType?: Maybe<Scalars["String"]>
  statisticalTestTail?: Maybe<Scalars["String"]>
  interactingTargetFromSourceId?: Maybe<Scalars["String"]>
  phenotypicConsequenceLogFoldChange?: Maybe<Scalars["Float"]>
  phenotypicConsequenceFDR?: Maybe<Scalars["Float"]>
  phenotypicConsequencePValue?: Maybe<Scalars["Float"]>
  geneticInteractionScore?: Maybe<Scalars["Float"]>
  geneticInteractionPValue?: Maybe<Scalars["Float"]>
  geneticInteractionFDR?: Maybe<Scalars["Float"]>
  biomarkerList?: Maybe<Array<NameDescription>>
  expectedConfidence?: Maybe<Scalars["String"]>
  projectDescription?: Maybe<Scalars["String"]>
  validationHypotheses?: Maybe<Array<ValidationHypothesis>>
  geneInteractionType?: Maybe<Scalars["String"]>
  targetRole?: Maybe<Scalars["String"]>
  interactingTargetRole?: Maybe<Scalars["String"]>
  /** Genetic origin of a population */
  ancestry?: Maybe<Scalars["String"]>
  /** Identifier of the ancestry in the HANCESTRO ontology */
  ancestryId?: Maybe<Scalars["String"]>
  /** The statistical method used to calculate the association */
  statisticalMethod?: Maybe<Scalars["String"]>
  /** Overview of the statistical method used to calculate the association */
  statisticalMethodOverview?: Maybe<Scalars["String"]>
  /** Number of cases in a case-control study that carry at least one allele of the qualifying variant */
  studyCasesWithQualifyingVariants?: Maybe<Scalars["Int"]>
  /** Identifier in HGVS notation of the disease-causing variant */
  variantHgvsId?: Maybe<Scalars["String"]>
  /** Release version */
  releaseVersion?: Maybe<Scalars["String"]>
  /** Release date */
  releaseDate?: Maybe<Scalars["String"]>
  /** Warning message */
  warningMessage?: Maybe<Scalars["String"]>
}

export type EvidenceSource = {
  __typename?: "EvidenceSource"
  datasource: Scalars["String"]
  datatype: Scalars["String"]
}

export type EvidenceTextMiningSentence = {
  __typename?: "EvidenceTextMiningSentence"
  dEnd: Scalars["Int"]
  tEnd: Scalars["Int"]
  dStart: Scalars["Int"]
  tStart: Scalars["Int"]
  section: Scalars["String"]
  text: Scalars["String"]
}

/** Sequence Ontology Term */
export type EvidenceVariation = {
  __typename?: "EvidenceVariation"
  functionalConsequence?: Maybe<SequenceOntologyTerm>
  numberMutatedSamples?: Maybe<Scalars["Int"]>
  numberSamplesTested?: Maybe<Scalars["Int"]>
  numberSamplesWithMutationType?: Maybe<Scalars["Int"]>
}

/** Evidence for a Target-Disease pair */
export type Evidences = {
  __typename?: "Evidences"
  count: Scalars["Int"]
  cursor?: Maybe<Scalars["String"]>
  rows: Array<Evidence>
}

export type Expression = {
  __typename?: "Expression"
  tissue: Tissue
  rna: RnaExpression
  protein: ProteinExpression
}

export type GeneEssentialityScreen = {
  __typename?: "GeneEssentialityScreen"
  cellLineName?: Maybe<Scalars["String"]>
  depmapId?: Maybe<Scalars["String"]>
  diseaseCellLineId?: Maybe<Scalars["String"]>
  diseaseFromSource?: Maybe<Scalars["String"]>
  expression?: Maybe<Scalars["Float"]>
  geneEffect?: Maybe<Scalars["Float"]>
  mutation?: Maybe<Scalars["String"]>
}

export type GeneOntology = {
  __typename?: "GeneOntology"
  aspect: Scalars["String"]
  evidence: Scalars["String"]
  geneProduct: Scalars["String"]
  source: Scalars["String"]
  /** Gene ontology term */
  term: GeneOntologyTerm
}

export type GeneOntologyTerm = {
  __typename?: "GeneOntologyTerm"
  id: Scalars["String"]
  name: Scalars["String"]
}

export type GenomicLocation = {
  __typename?: "GenomicLocation"
  chromosome: Scalars["String"]
  start: Scalars["Int"]
  end: Scalars["Int"]
  strand: Scalars["Int"]
}

/** Phenotype entity */
export type Hpo = {
  __typename?: "HPO"
  /** Open Targets hpo id */
  id: Scalars["String"]
  /** Phenotype name */
  name: Scalars["String"]
  /** Phenotype description */
  description?: Maybe<Scalars["String"]>
  /** namespace */
  namespace?: Maybe<Array<Scalars["String"]>>
}

export type HallmarkAttribute = {
  __typename?: "HallmarkAttribute"
  name: Scalars["String"]
  description: Scalars["String"]
  pmid?: Maybe<Scalars["Int"]>
}

export type Hallmarks = {
  __typename?: "Hallmarks"
  cancerHallmarks: Array<CancerHallmark>
  attributes: Array<HallmarkAttribute>
}

export type Homologue = {
  __typename?: "Homologue"
  homologyType: Scalars["String"]
  queryPercentageIdentity: Scalars["Float"]
  speciesId: Scalars["String"]
  speciesName: Scalars["String"]
  targetGeneId: Scalars["String"]
  targetGeneSymbol: Scalars["String"]
  targetPercentageIdentity: Scalars["Float"]
  isHighConfidence?: Maybe<Scalars["String"]>
}

export type IdAndSource = {
  __typename?: "IdAndSource"
  id: Scalars["String"]
  source: Scalars["String"]
}

export type IndicationReference = {
  __typename?: "IndicationReference"
  ids?: Maybe<Array<Scalars["String"]>>
  source: Scalars["String"]
}

export type IndicationRow = {
  __typename?: "IndicationRow"
  maxPhaseForIndication: Scalars["Float"]
  references?: Maybe<Array<IndicationReference>>
  /** Disease */
  disease: Disease
}

export type Indications = {
  __typename?: "Indications"
  rows: Array<IndicationRow>
  count: Scalars["Int"]
  approvedIndications?: Maybe<Array<Scalars["String"]>>
}

export type Interaction = {
  __typename?: "Interaction"
  intA: Scalars["String"]
  targetA?: Maybe<Target>
  intB: Scalars["String"]
  targetB?: Maybe<Target>
  intABiologicalRole: Scalars["String"]
  intBBiologicalRole: Scalars["String"]
  score?: Maybe<Scalars["Float"]>
  count: Scalars["Int"]
  sourceDatabase: Scalars["String"]
  speciesA?: Maybe<InteractionSpecies>
  speciesB?: Maybe<InteractionSpecies>
  /** List of evidences for this interaction */
  evidences: Array<InteractionEvidence>
}

export type InteractionEvidence = {
  __typename?: "InteractionEvidence"
  evidenceScore?: Maybe<Scalars["Float"]>
  expansionMethodMiIdentifier?: Maybe<Scalars["String"]>
  expansionMethodShortName?: Maybe<Scalars["String"]>
  hostOrganismScientificName?: Maybe<Scalars["String"]>
  hostOrganismTaxId?: Maybe<Scalars["Int"]>
  intASource: Scalars["String"]
  intBSource: Scalars["String"]
  interactionDetectionMethodMiIdentifier: Scalars["String"]
  interactionDetectionMethodShortName: Scalars["String"]
  interactionIdentifier?: Maybe<Scalars["String"]>
  interactionTypeMiIdentifier?: Maybe<Scalars["String"]>
  interactionTypeShortName?: Maybe<Scalars["String"]>
  participantDetectionMethodA?: Maybe<Array<InteractionEvidencePdm>>
  participantDetectionMethodB?: Maybe<Array<InteractionEvidencePdm>>
  pubmedId?: Maybe<Scalars["String"]>
}

export type InteractionEvidencePdm = {
  __typename?: "InteractionEvidencePDM"
  miIdentifier?: Maybe<Scalars["String"]>
  shortName?: Maybe<Scalars["String"]>
}

export type InteractionResources = {
  __typename?: "InteractionResources"
  databaseVersion: Scalars["String"]
  sourceDatabase: Scalars["String"]
}

export type InteractionSpecies = {
  __typename?: "InteractionSpecies"
  mnemonic?: Maybe<Scalars["String"]>
  scientificName?: Maybe<Scalars["String"]>
  taxonId?: Maybe<Scalars["Int"]>
}

export type Interactions = {
  __typename?: "Interactions"
  count: Scalars["Int"]
  rows: Array<Interaction>
}

/** A key-value pair */
export type KeyValue = {
  __typename?: "KeyValue"
  key: Scalars["String"]
  value: Scalars["String"]
}

/** An array of key-value pairs */
export type KeyValueArray = {
  __typename?: "KeyValueArray"
  items: Array<KeyValue>
}

/** Clinical precedence entry for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action. Entries are grouped by target, disease, drug, phase, status and mechanism of action */
export type KnownDrug = {
  __typename?: "KnownDrug"
  /** Drug target approved symbol based on curated mechanism of action */
  approvedSymbol: Scalars["String"]
  approvedName: Scalars["String"]
  /** Curated disease indication */
  label: Scalars["String"]
  /** Drug name */
  prefName: Scalars["String"]
  /** Drug modality */
  drugType: Scalars["String"]
  /** Drug target Open Targets id based on curated mechanism of action */
  targetId: Scalars["String"]
  /** Curated disease indication Open Targets id */
  diseaseId: Scalars["String"]
  /** Open Targets drug id */
  drugId: Scalars["String"]
  /** Clinical Trial phase */
  phase: Scalars["Float"]
  /** Mechanism of Action description */
  mechanismOfAction: Scalars["String"]
  /** Trial status */
  status?: Maybe<Scalars["String"]>
  /** Drug target class based on curated mechanism of action */
  targetClass: Array<Scalars["String"]>
  /** Source urls for FDA or package inserts */
  references: Array<KnownDrugReference>
  /** Clinicaltrials.gov identifiers on entry trials */
  ctIds: Array<Scalars["String"]>
  /** Source urls from clinical trials */
  urls: Array<Url>
  /** Curated disease indication entity */
  disease?: Maybe<Disease>
  /** Drug target entity based on curated mechanism of action */
  target?: Maybe<Target>
  /** Curated drug entity */
  drug?: Maybe<Drug>
}

export type KnownDrugReference = {
  __typename?: "KnownDrugReference"
  source: Scalars["String"]
  ids: Array<Scalars["String"]>
  urls: Array<Scalars["String"]>
}

/** Set of clinical precedence for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action */
export type KnownDrugs = {
  __typename?: "KnownDrugs"
  /** Total unique drugs/molecules */
  uniqueDrugs: Scalars["Int"]
  /** Total unique diseases or phenotypes */
  uniqueDiseases: Scalars["Int"]
  /** Total unique known mechanism of action targetsTotal unique known mechanism of action targets */
  uniqueTargets: Scalars["Int"]
  /** Total number of entries */
  count: Scalars["Int"]
  cursor?: Maybe<Scalars["String"]>
  /** Clinical precedence entries with known mechanism of action */
  rows: Array<KnownDrug>
}

export type LabelAndSource = {
  __typename?: "LabelAndSource"
  label: Scalars["String"]
  source: Scalars["String"]
}

export type LabelledElement = {
  __typename?: "LabelledElement"
  id: Scalars["String"]
  label: Scalars["String"]
}

export type LabelledUri = {
  __typename?: "LabelledUri"
  url: Scalars["String"]
  niceName: Scalars["String"]
}

/** Linked Disease Entities */
export type LinkedDiseases = {
  __typename?: "LinkedDiseases"
  count: Scalars["Int"]
  /** Disease List */
  rows: Array<Disease>
}

/** Linked Target Entities */
export type LinkedTargets = {
  __typename?: "LinkedTargets"
  count: Scalars["Int"]
  /** Target List */
  rows: Array<Target>
}

export type LocationAndSource = {
  __typename?: "LocationAndSource"
  location: Scalars["String"]
  source: Scalars["String"]
  termSL?: Maybe<Scalars["String"]>
  labelSL?: Maybe<Scalars["String"]>
}

export type Match = {
  __typename?: "Match"
  mappedId: Scalars["String"]
  matchedLabel: Scalars["String"]
  sectionStart?: Maybe<Scalars["Int"]>
  sectionEnd?: Maybe<Scalars["Int"]>
  startInSentence: Scalars["Int"]
  endInSentence: Scalars["Int"]
  /** Type of the matched label */
  matchedType: Scalars["String"]
}

export type MechanismOfActionRow = {
  __typename?: "MechanismOfActionRow"
  mechanismOfAction: Scalars["String"]
  actionType?: Maybe<Scalars["String"]>
  targetName?: Maybe<Scalars["String"]>
  references?: Maybe<Array<Reference>>
  /** Target List */
  targets: Array<Target>
}

export type MechanismsOfAction = {
  __typename?: "MechanismsOfAction"
  rows: Array<MechanismOfActionRow>
  uniqueActionTypes: Array<Scalars["String"]>
  uniqueTargetTypes: Array<Scalars["String"]>
}

export type Meta = {
  __typename?: "Meta"
  name: Scalars["String"]
  apiVersion: ApiVersion
  dataVersion: DataVersion
}

export type ModelPhenotypeClasses = {
  __typename?: "ModelPhenotypeClasses"
  id: Scalars["String"]
  label: Scalars["String"]
}

export type MousePhenotype = {
  __typename?: "MousePhenotype"
  biologicalModels: Array<BiologicalModels>
  modelPhenotypeClasses: Array<ModelPhenotypeClasses>
  modelPhenotypeId: Scalars["String"]
  modelPhenotypeLabel: Scalars["String"]
  targetInModel: Scalars["String"]
  targetInModelEnsemblId?: Maybe<Scalars["String"]>
  targetInModelMgiId: Scalars["String"]
}

export type NameDescription = {
  __typename?: "NameDescription"
  name: Scalars["String"]
  description: Scalars["String"]
}

export type NamedAggregation = {
  __typename?: "NamedAggregation"
  name: Scalars["String"]
  uniques?: Maybe<Scalars["Int"]>
  rows: Array<Aggregation>
}

export type OtarProject = {
  __typename?: "OtarProject"
  otarCode: Scalars["String"]
  status: Scalars["String"]
  projectName: Scalars["String"]
  reference: Scalars["String"]
  integratesInPPP: Scalars["Boolean"]
}

export type Pagination = {
  index: Scalars["Int"]
  size: Scalars["Int"]
}

/** Pathway entry */
export type Pathway = {
  __typename?: "Pathway"
  /** Pathway ID */
  id: Scalars["String"]
  /** Pathway Name */
  name: Scalars["String"]
}

export type ProteinExpression = {
  __typename?: "ProteinExpression"
  reliability: Scalars["Boolean"]
  level: Scalars["Int"]
  cellType: Array<CellType>
}

export type Publication = {
  __typename?: "Publication"
  pmid: Scalars["String"]
  pmcid?: Maybe<Scalars["String"]>
  /** Publication Date */
  publicationDate?: Maybe<Scalars["String"]>
  /** Unique counts per matched keyword */
  sentences?: Maybe<Array<Sentence>>
}

/** Publication list */
export type Publications = {
  __typename?: "Publications"
  count: Scalars["Int"]
  filteredCount: Scalars["Int"]
  /** Earliest publication year. */
  earliestPubYear: Scalars["Int"]
  cursor?: Maybe<Scalars["String"]>
  rows: Array<Publication>
}

export type Query = {
  __typename?: "Query"
  /** Return Open Targets API metadata information */
  meta: Meta
  /** Return a Target */
  target?: Maybe<Target>
  /** Return Targets */
  targets: Array<Target>
  /** Return a Disease */
  disease?: Maybe<Disease>
  /** Return Diseases */
  diseases: Array<Disease>
  /** Return a drug */
  drug?: Maybe<Drug>
  /** Return drugs */
  drugs: Array<Drug>
  /** Multi entity search */
  search: SearchResults
  /** The complete list of all possible datasources */
  associationDatasources: Array<EvidenceSource>
  /** The complete list of all possible datasources */
  interactionResources: Array<InteractionResources>
  /** Gene ontology terms */
  geneOntologyTerms: Array<Maybe<GeneOntologyTerm>>
}

export type QueryTargetArgs = {
  ensemblId: Scalars["String"]
}

export type QueryTargetsArgs = {
  ensemblIds: Array<Scalars["String"]>
}

export type QueryDiseaseArgs = {
  efoId: Scalars["String"]
}

export type QueryDiseasesArgs = {
  efoIds: Array<Scalars["String"]>
}

export type QueryDrugArgs = {
  chemblId: Scalars["String"]
}

export type QueryDrugsArgs = {
  chemblIds: Array<Scalars["String"]>
}

export type QuerySearchArgs = {
  queryString: Scalars["String"]
  entityNames?: Maybe<Array<Scalars["String"]>>
  page?: Maybe<Pagination>
}

export type QueryGeneOntologyTermsArgs = {
  goIds: Array<Scalars["String"]>
}

export type RnaExpression = {
  __typename?: "RNAExpression"
  zscore: Scalars["Int"]
  value: Scalars["Float"]
  unit: Scalars["String"]
  level: Scalars["Int"]
}

export type ReactomePathway = {
  __typename?: "ReactomePathway"
  pathway: Scalars["String"]
  pathwayId: Scalars["String"]
  topLevelTerm: Scalars["String"]
}

export type Reference = {
  __typename?: "Reference"
  ids?: Maybe<Array<Scalars["String"]>>
  source: Scalars["String"]
  urls?: Maybe<Array<Scalars["String"]>>
}

export type SafetyBiosample = {
  __typename?: "SafetyBiosample"
  tissueLabel?: Maybe<Scalars["String"]>
  tissueId?: Maybe<Scalars["String"]>
  cellLabel?: Maybe<Scalars["String"]>
  cellFormat?: Maybe<Scalars["String"]>
  cellId?: Maybe<Scalars["String"]>
}

export type SafetyEffects = {
  __typename?: "SafetyEffects"
  direction: Scalars["String"]
  dosing?: Maybe<Scalars["String"]>
}

export type SafetyLiability = {
  __typename?: "SafetyLiability"
  biosamples?: Maybe<Array<SafetyBiosample>>
  datasource: Scalars["String"]
  effects?: Maybe<Array<SafetyEffects>>
  event?: Maybe<Scalars["String"]>
  eventId?: Maybe<Scalars["String"]>
  literature?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
  studies?: Maybe<Array<SafetyStudy>>
}

export type SafetyStudy = {
  __typename?: "SafetyStudy"
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  type?: Maybe<Scalars["String"]>
}

export type ScoredComponent = {
  __typename?: "ScoredComponent"
  id: Scalars["String"]
  score: Scalars["Float"]
}

export type SearchResult = {
  __typename?: "SearchResult"
  id: Scalars["String"]
  entity: Scalars["String"]
  category: Array<Scalars["String"]>
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  keywords?: Maybe<Array<Scalars["String"]>>
  multiplier: Scalars["Float"]
  prefixes?: Maybe<Array<Scalars["String"]>>
  ngrams?: Maybe<Array<Scalars["String"]>>
  score: Scalars["Float"]
  highlights: Array<Scalars["String"]>
  /** Associations for a fixed target */
  object?: Maybe<EntityUnionType>
}

export type SearchResultAggCategory = {
  __typename?: "SearchResultAggCategory"
  name: Scalars["String"]
  total: Scalars["Int"]
}

export type SearchResultAggEntity = {
  __typename?: "SearchResultAggEntity"
  name: Scalars["String"]
  total: Scalars["Int"]
  categories: Array<SearchResultAggCategory>
}

export type SearchResultAggs = {
  __typename?: "SearchResultAggs"
  total: Scalars["Int"]
  entities: Array<SearchResultAggEntity>
}

/** Search results */
export type SearchResults = {
  __typename?: "SearchResults"
  /** Aggregations */
  aggregations?: Maybe<SearchResultAggs>
  /** Return combined */
  hits: Array<SearchResult>
  /** Total number or results given a entity filter */
  total: Scalars["Int"]
}

export type Sentence = {
  __typename?: "Sentence"
  /** Section of the publication (either title or abstract) */
  section: Scalars["String"]
  /** List of matches */
  matches: Array<Match>
}

/** Sequence Ontology Term */
export type SequenceOntologyTerm = {
  __typename?: "SequenceOntologyTerm"
  /** Sequence Ontology ID */
  id: Scalars["String"]
  /** Sequence Ontology Label */
  label: Scalars["String"]
}

export type Similarity = {
  __typename?: "Similarity"
  category: Scalars["String"]
  id: Scalars["String"]
  score: Scalars["Float"]
  /** Similarity label optionally resolved into an entity */
  object?: Maybe<EntityUnionType>
}

/** Target entity */
export type Target = {
  __typename?: "Target"
  /** Open Targets target id */
  id: Scalars["String"]
  alternativeGenes: Array<Scalars["String"]>
  /** HGNC approved symbol */
  approvedSymbol: Scalars["String"]
  /** Approved gene name */
  approvedName: Scalars["String"]
  /** Molecule biotype */
  biotype: Scalars["String"]
  chemicalProbes: Array<ChemicalProbe>
  /** Database cross references */
  dbXrefs: Array<IdAndSource>
  /** ... */
  functionDescriptions: Array<Scalars["String"]>
  /** Symbol synonyms */
  geneticConstraint: Array<Constraint>
  /** Chromosomic location */
  genomicLocation: GenomicLocation
  /** Gene Ontology annotations */
  geneOntology: Array<GeneOntology>
  /** Target-modulated essential alterations in cell physiology that dictate malignant growth */
  hallmarks?: Maybe<Hallmarks>
  /** Gene homologues */
  homologues: Array<Homologue>
  /** Reactome pathways */
  pathways: Array<ReactomePathway>
  /** Related protein IDs */
  proteinIds: Array<IdAndSource>
  /** Known target safety effects and target safety risk information */
  safetyLiabilities: Array<SafetyLiability>
  /** Location of ... */
  subcellularLocations: Array<LocationAndSource>
  /** Alternative names and symbols */
  synonyms: Array<LabelAndSource>
  /** Alternative symbols */
  symbolSynonyms: Array<LabelAndSource>
  /** Alternative names */
  nameSynonyms: Array<LabelAndSource>
  /** Obsolete symbols */
  obsoleteSymbols: Array<LabelAndSource>
  /** Obsolete names */
  obsoleteNames: Array<LabelAndSource>
  targetClass: Array<TargetClass>
  /** Target Enabling Package (TEP) */
  tep?: Maybe<Tep>
  /** Target druggability assessment */
  tractability: Array<Tractability>
  /** Ensembl transcript IDs */
  transcriptIds: Array<Scalars["String"]>
  /** Return similar labels using a model Word2CVec trained with PubMed */
  similarEntities: Array<Similarity>
  /** Return the list of publications that mention the main entity, alone or in combination with other entities */
  literatureOcurrences: Publications
  /** The complete list of all possible datasources */
  evidences: Evidences
  /** Biological pathway membership from Reactome */
  interactions?: Maybe<Interactions>
  /** Biological pathway membership from Reactome */
  mousePhenotypes: Array<MousePhenotype>
  /** RNA and Protein baseline expression */
  expressions: Array<Expression>
  /** Clinical precedence for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action */
  knownDrugs?: Maybe<KnownDrugs>
  /** associations on the fly */
  associatedDiseases: AssociatedDiseases
  /** Factors influencing target-specific properties informative in a target prioritisation strategy. Values range from -1 (deprioritised) to 1 (prioritised). */
  prioritisation?: Maybe<KeyValueArray>
  /** isEssential */
  isEssential?: Maybe<Scalars["Boolean"]>
  /** depMapEssentiality */
  depMapEssentiality?: Maybe<Array<DepMapEssentiality>>
}

/** Target entity */
export type TargetSimilarEntitiesArgs = {
  additionalIds?: Maybe<Array<Scalars["String"]>>
  entityNames?: Maybe<Array<Scalars["String"]>>
  threshold?: Maybe<Scalars["Float"]>
  size?: Maybe<Scalars["Int"]>
}

/** Target entity */
export type TargetLiteratureOcurrencesArgs = {
  additionalIds?: Maybe<Array<Scalars["String"]>>
  startYear?: Maybe<Scalars["Int"]>
  startMonth?: Maybe<Scalars["Int"]>
  endYear?: Maybe<Scalars["Int"]>
  endMonth?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Target entity */
export type TargetEvidencesArgs = {
  efoIds: Array<Scalars["String"]>
  datasourceIds?: Maybe<Array<Scalars["String"]>>
  size?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Target entity */
export type TargetInteractionsArgs = {
  sourceDatabase?: Maybe<Scalars["String"]>
  page?: Maybe<Pagination>
}

/** Target entity */
export type TargetKnownDrugsArgs = {
  freeTextQuery?: Maybe<Scalars["String"]>
  size?: Maybe<Scalars["Int"]>
  cursor?: Maybe<Scalars["String"]>
}

/** Target entity */
export type TargetAssociatedDiseasesArgs = {
  Bs?: Maybe<Array<Scalars["String"]>>
  enableIndirect?: Maybe<Scalars["Boolean"]>
  datasources?: Maybe<Array<DatasourceSettingsInput>>
  aggregationFilters?: Maybe<Array<AggregationFilter>>
  BFilter?: Maybe<Scalars["String"]>
  orderByScore?: Maybe<Scalars["String"]>
  page?: Maybe<Pagination>
}

export type TargetClass = {
  __typename?: "TargetClass"
  id: Scalars["Int"]
  label: Scalars["String"]
  level: Scalars["String"]
}

/** Target Enabling Package (TEP) */
export type Tep = {
  __typename?: "Tep"
  name: Scalars["String"]
  uri: Scalars["String"]
  therapeuticArea: Scalars["String"]
  description: Scalars["String"]
}

/** Tissue, organ and anatomical system */
export type Tissue = {
  __typename?: "Tissue"
  /** UBERON id */
  id: Scalars["String"]
  /** UBERON tissue label */
  label: Scalars["String"]
  /** Anatomical systems membership */
  anatomicalSystems: Array<Scalars["String"]>
  /** Organs membership */
  organs: Array<Scalars["String"]>
}

export type Tractability = {
  __typename?: "Tractability"
  label: Scalars["String"]
  modality: Scalars["String"]
  value: Scalars["Boolean"]
}

/** Source URL for clinical trials, FDA and package inserts */
export type Url = {
  __typename?: "URL"
  /** resource url */
  url: Scalars["String"]
  /** resource name */
  name: Scalars["String"]
}

export type ValidationHypothesis = {
  __typename?: "ValidationHypothesis"
  name: Scalars["String"]
  description: Scalars["String"]
  status: Scalars["String"]
}

export type Biomarkers = {
  __typename?: "biomarkers"
  geneExpression?: Maybe<Array<GeneExpression>>
  variant?: Maybe<Array<Variant>>
}

export type GeneExpression = {
  __typename?: "geneExpression"
  name?: Maybe<Scalars["String"]>
  id?: Maybe<GeneOntologyTerm>
}

export type Variant = {
  __typename?: "variant"
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  functionalConsequenceId?: Maybe<SequenceOntologyTerm>
}
