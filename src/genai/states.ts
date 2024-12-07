/**
 * States of the GenAI Module
 */

const S1: Record<string, any> = {
  APP_ACADEMIC_IN: { state: "app_academic_in", answer: "academic" },
  APP_ACADEMIC_OUT: { state: "app_academic_out", answer: "academic" },
  APP_MEDICAL_IN: { state: "app_medical_in", answer: "medical" },
  APP_MEDICAL_OUT: { state: "app_medical_out", answer: "medical" },
  APP_VIDEO_IN: { state: "app_video_in", answer: "video" },
  APP_VIDEO_OUT: { state: "app_video_out", answer: "video" },
  APP_SENTIMENT_IN: { state: "app_sentiment_in", answer: "sentiment" },
  APP_SENTIMENT_OUT: { state: "app_sentiment_out", answer: "sentiment" },
  APP_FRAUD_IN: { state: "app_fraud_in", answer: "fraud" },
  APP_FRAUD_OUT: { state: "app_fraud_out", answer: "fraud" },
  APP_BRAINSTORM_SECTOR: { state: "app_brainstorm_sector", answer: null },
  APP_BRAINSTORM_PROBLEM: { state: "app_brainstorm_problem", answer: null },
  APP_BRAINSTORM_INPUT: { state: "app_brainstorm_input", answer: null },
  APP_BRAINSTORM_OUTPUT: { state: "app_brainstorm_output", answer: null },
};

const S2: Record<string, any> = {
  LLM_PROMPT: { state: "llm_prompt", answer: null },
  LLM_SIMPLE_GENERATED: { state: "llm_simple_generated", answer: true },
  LLM_REFINED_GENERATED: { state: "llm_refined_generated", answer: true },
  LLM_PROMPT_TECHNIQUE: { state: "llm_prompt_technique", answer: 4 },
  LLM_CONV_GENERATED: { state: "llm_conv_generated", answer: 5 },
  LLM_FACT_IPOA: { state: "llm_fact_ipoa", answer: 0 },
  LLM_FACT_NASA: { state: "llm_fact_nasa", answer: 1 },
  LLM_FACT_EUREO: { state: "llm_fact_eureo", answer: 0 },
  LLM_BRAINSTORM_TASK: { state: "llm_brainstorm_task", answer: null },
  LLM_BRAINSTORM_PROMPT: { state: "llm_brainstorm_prompt", answer: null },
};

const S3: Record<string, any> = {
  EMB_DOG_BARK: { state: "emb_dog_bark", answer: 1 },
  EMB_DOG_MOVE: { state: "emb_dog_move", answer: 1 },
  EMB_DOG_MAMMAL: { state: "emb_dog_mammal", answer: 1 },
  EMB_DOG_WHEEL: { state: "emb_dog_wheel", answer: 0 },
  EMB_DOG_TAIL: { state: "emb_dog_tail", answer: 1 },
  EMB_CAR_BARK: { state: "emb_car_bark", answer: 0 },
  EMB_CAR_MOVE: { state: "emb_car_move", answer: 1 },
  EMB_CAR_MAMMAL: { state: "emb_car_mammal", answer: 0 },
  EMB_CAR_WHEEL: { state: "emb_car_wheel", answer: 1 },
  EMB_CAR_TAIL: { state: "emb_car_tail", answer: 0 },
  SIM_CAT_CAR: { state: "sim_cat_car", answer: 0.408 },
  EMB_KING_MALE: { state: "emb_king_male", answer: 1 },
  EMB_KING_FEMALE: { state: "emb_king_female", answer: 0 },
  EMB_KING_ROYAL: { state: "emb_king_royal", answer: 1 },
  ANALOGY_BASE: { state: "analogy_base", answer: null },
  ANALOGY_SUB: { state: "analogy_sub", answer: null },
  ANALOGY_ADD: { state: "analogy_add", answer: null },
  ANALOGY_OUT: { state: "analogy_out", answer: null },
  RAG_PROMPT: { state: "rag_prompt", answer: null },
  RAG_GENERATED: { state: "rag_generated", answer: 8 },
  RAG_BRAINSTORM_TASK: { state: "rag_brainstorm_task", answer: null },
  RAG_BRAINSTORM_DATABASE: { state: "rag_brainstorm_database", answer: null },
};

const S4: Record<string, any> = {
  BIAS_TYPE: { state: "bias_type", answer: null },
  BIAS_ATTRIBUTE: { state: "bias_attribute", answer: null },
  BIAS_TARGET1_SIM: { state: "bias_target1_sim", answer: null },
  BIAS_TARGET2_SIM: { state: "bias_target2_sim", answer: null },
  BIAS_LLM: { state: "bias_llm", answer: null },
  REG_RISK_JOB: { state: "reg_risk_job", answer: 2 },
  REG_RISK_HOMEWORK: { state: "reg_risk_homework", answer: 1 },
  REG_RISK_FAKE: { state: "reg_risk_fake", answer: 3 },
  REG_RISK_JUDGE: { state: "reg_risk_judge", answer: 2 },
  REG_RISK_POLICE: { state: "reg_risk_police", answer: 3 },
  CASE_STORY: { state: "case_story", answer: null },
  CASE_PRO_1: { state: "case_pro_1", answer: null },
  CASE_PRO_2: { state: "case_pro_2", answer: null },
  CASE_PRO_3: { state: "case_pro_3", answer: null },
  CASE_CON_1: { state: "case_con_1", answer: null },
  CASE_CON_2: { state: "case_con_2", answer: null },
  CASE_CON_3: { state: "case_con_3", answer: null },
  CASE_ETHICAL: { state: "case_ethical", answer: null },
  CASE_TECHNICAL: { state: "case_technical", answer: null },
  CASE_COST: { state: "case_cost", answer: null },
  CASE_EXPLAIN: { state: "case_explain", answer: null },
};

export { S1, S2, S3, S4 };
