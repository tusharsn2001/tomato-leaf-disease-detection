const diseases = {
  "Tomato_Bacterial_spot": {
    "name": "Bacterial Spot",
    "description": "Bacterial spot is a common disease affecting tomatoes. It is caused by the bacterium Xanthomonas campestris.",
    "suggestions": "Apply copper-based fungicides.",
    "solutions": "Remove and destroy infected plants to prevent the spread.",
    "chemicals": ["Copper-based fungicides", "Streptomycin"],
    "pesticides": ["Neem oil", "Bacillus thuringiensis"]
  },
  "Tomato_Early_blight": {
    "name": "Early Blight",
    "description": "Early blight is a fungal disease caused by Alternaria solani, leading to dark lesions on lower leaves.",
    "suggestions": "Apply fungicides containing chlorothalonil or copper. Implement crop rotation.",
    "solutions": "Prune lower branches to improve air circulation. Mulch to reduce soil splash.",
    "chemicals": ["Chlorothalonil-based fungicides", "Copper-based fungicides"],
    "pesticides": ["Neem oil"]
  },
  "Tomato_Late_blight": {
    "name": "Late Blight",
    "description": "Late blight is a water mold disease caused by Phytophthora infestans, resulting in dark lesions and rapid plant death.",
    "suggestions": "Use fungicides containing copper or chlorothalonil. Practice good ventilation and crop rotation.",
    "solutions": "Remove and destroy infected plants. Avoid overhead watering.",
    "chemicals": ["Copper-based fungicides", "Chlorothalonil-based fungicides"],
    "pesticides": ["Neem oil"]
  },
  "Tomato_Leaf_Mold": {
    "name": "Leaf Mold",
    "description": "Leaf mold is a fungal disease caused by Fulvia fulva, leading to yellow spots on leaves and fuzzy growth.",
    "suggestions": "Apply fungicides containing chlorothalonil. Ensure good air circulation and reduce humidity.",
    "solutions": "Remove infected leaves and maintain proper spacing between plants.",
    "chemicals": ["Chlorothalonil-based fungicides"],
    "pesticides": ["Neem oil"]
  },
  "Tomato_Septoria_leaf_spot": {
    "name": "Septoria Leaf Spot",
    "description": "Septoria leaf spot is caused by the fungus Septoria lycopersici, resulting in small dark spots with yellow halos.",
    "suggestions": "Apply fungicides containing chlorothalonil. Remove infected leaves and practice crop rotation.",
    "solutions": "Prune lower leaves and provide proper spacing for air circulation.",
    "chemicals": ["Chlorothalonil-based fungicides"],
    "pesticides": ["Neem oil"]
  },
  "Tomato_Spider_mites_Two_spotted_spider_mite": {
    "name": "Two-Spotted Spider Mite",
    "description": "Two-spotted spider mites cause yellow stippling on leaves.",
    "suggestions": "Use miticides to control spider mites. Increase humidity and apply insecticidal soap.",
    "solutions": "Release predatory mites. Avoid over-fertilization.",
    "chemicals": ["Miticides", "Insecticidal soap"],
    "pesticides": ["Neem oil"]
  },
  "Tomato_Target_Spot": {
    "name": "Target Spot",
    "description": "Target spot is caused by the fungus Corynespora cassiicola, resulting in dark concentric rings on leaves.",
    "suggestions": "Apply fungicides containing chlorothalonil. Practice crop rotation and good sanitation.",
    "solutions": "Remove and destroy infected leaves. Provide adequate spacing for air circulation.",
    "chemicals": ["Chlorothalonil-based fungicides"],
    "pesticides": ["Neem oil"]
  },
  "Tomato__Tomato_YellowLeaf__Curl_Virus": {
    "name": "Tomato Yellow Leaf Curl Virus",
    "description": "Tomato yellow leaf curl virus is transmitted by whiteflies, leading to curling and yellowing of leaves.",
    "suggestions": "Control whiteflies using insecticides. Remove infected plants and use resistant varieties.",
    "solutions": "Apply reflective mulch to deter whiteflies. Introduce natural enemies like ladybugs.",
    "chemicals": ["Insecticides"],
    "pesticides": ["Neem oil"]
  },
  "Tomato__Tomato_mosaic_virus": {
    "name": "Tomato Mosaic Virus",
    "description": "Tomato mosaic virus causes mosaic patterns on leaves.",
    "suggestions": "Use virus-resistant tomato varieties. Control aphids, which transmit the virus.",
    "solutions": "Remove and destroy infected plants. Control aphid populations.",
    "chemicals": ["Virus-resistant varieties"],
    "pesticides": ["Neem oil"]
  },
  "Tomato_healthy": {
    "name": "Healthy",
    "description": "Plants showing no signs of disease.",
    "maintenance": "Implement good cultural practices, monitor for signs of diseases, and maintain optimal growing conditions."
  }
}
export default diseases