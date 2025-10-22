// عناصر الصفحة
const btn = document.getElementById("generateBtn");
const input = document.getElementById("ingredients");
const resultBox = document.getElementById("result");
const loader = document.getElementById("loader");
const searchBtn = document.getElementById("search-btn");
const recipeInput = document.getElementById("recipe-input");
const searchResults = document.getElementById("results");
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// قاعدة بيانات الوصفات
const recipes = [
  {
    name: "المنسف الأردني",
    ingredients: ["لحم", "جميد", "أرز", "سمن"],
    method: "يُسلق اللحم مع الجميد، ثم يوضع الأرز المفلفل في طبق ويُسكب فوقه المرق، وتُوزع قطع اللحم على الوجه ويُزيّن بالمكسرات.",
    category: "أطباق رئيسية",
    time: "٢ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "المقلوبة",
    ingredients: ["أرز", "باذنجان", "دجاج", "بطاطا"],
    method: "ترتّب الخضار والدجاج في قدر، يُضاف الأرز والماء، ثم تُقلب في طبق التقديم وتُزيّن بالمكسرات.",
    category: "أطباق رئيسية",
    time: "١.٥ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "المجدّرة",
    ingredients: ["عدس", "أرز", "بصل"],
    method: "يُسلق العدس ثم يُضاف إليه الأرز، ويُقلّى البصل حتى يصبح ذهبي اللون ويُضاف على الوجه.",
    category: "أطباق رئيسية",
    time: "٤٥ دقيقة",
    difficulty: "سهل"
  },
  {
    name: "ورق دوالي",
    ingredients: ["ورق عنب", "رز", "زيت", "ليمون"],
    method: "يُلف ورق العنب بخليط الأرز والبندورة والتوابل، ثم يُطبخ على نار هادئة مع شرائح الليمون.",
    category: "أطباق رئيسية",
    time: "٢ ساعة",
    difficulty: "صعب"
  },
  {
    name: "الكبة المقلية",
    ingredients: ["برغل", "لحم", "بصل", "بهارات"],
    method: "يُعجن البرغل مع اللحم ويُحشى بالبصل واللحم المفروم، ثم تُشكل وتُقلى حتى تكتسب لونًا ذهبيًا.",
    category: "مقبلات",
    time: "١ ساعة",
    difficulty: "صعب"
  },
  {
    name: "المسخّن الفلسطيني",
    ingredients: ["دجاج", "بصل", "سماق", "زيت زيتون", "خبز"],
    method: "يُطهى البصل مع السماق والزيت، وتُحمّر الدجاجة وتُقدّم فوق الخبز مع البصل المحمّر.",
    category: "أطباق رئيسية",
    time: "١.٥ ساعة",
    difficulty: "سهل"
  },
  {
    name: "الشيشبرك",
    ingredients: ["عجين", "لحم مفروم", "لبن", "ثوم"],
    method: "يُحشى العجين باللحم ويُغلى في اللبن مع الثوم والكزبرة لتكوين نكهة مميزة.",
    category: "أطباق رئيسية",
    time: "١ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "الفتوش",
    ingredients: ["خس", "طماطم", "خيار", "بصل", "خبز مقلي"],
    method: "تُقطع الخضروات وتُخلط مع الخبز المحمّر، وتُضاف صلصة الليمون والزيت والخل.",
    category: "سلطات",
    time: "٢٠ دقيقة",
    difficulty: "سهل"
  },
  {
    name: "التبولة",
    ingredients: ["برغل", "بقدونس", "طماطم", "نعنع", "ليمون"],
    method: "يُنقع البرغل ويُخلط مع البقدونس والطماطم والنعنع والليمون والزيت.",
    category: "سلطات",
    time: "٣٠ دقيقة",
    difficulty: "سهل"
  },
  {
    name: "حمص بالطحينة",
    ingredients: ["حمص", "طحينة", "ليمون", "ثوم"],
    method: "يُهرس الحمص ويُخلط مع الطحينة وعصير الليمون والثوم حتى يصبح كريمي القوام.",
    category: "مقبلات",
    time: "١٥ دقيقة",
    difficulty: "سهل"
  },
  {
    name: "فلافل",
    ingredients: ["حمص", "بقدونس", "ثوم", "بصل"],
    method: "يُطحن الحمص مع البقدونس والثوم والبصل ويُقلى حتى يصبح مقرمشًا ولونه ذهبي.",
    category: "مقبلات",
    time: "٤٠ دقيقة",
    difficulty: "متوسط"
  },
  {
    name: "شاورما دجاج",
    ingredients: ["دجاج", "لبن", "ثوم", "بهارات"],
    method: "يُنقع الدجاج في اللبن والبهارات والثوم، ثم يُشوى أو يُحمّر ويُقدّم في خبز عربي.",
    category: "أطباق رئيسية",
    time: "١ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "كبسة سعودية",
    ingredients: ["رز", "دجاج", "بهارات", "بصل"],
    method: "يُطهى البصل مع البهارات ثم يُضاف الدجاج والأرز ويُترك حتى ينضج تمامًا.",
    category: "أطباق رئيسية",
    time: "١.٥ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "مقلقل لحم",
    ingredients: ["لحم", "فلفل", "طماطم", "بصل"],
    method: "تُقطع المكونات وتُقلى معًا في مقلاة حتى يتبخر الماء ويصبح اللحم طريًا ولذيذًا.",
    category: "أطباق رئيسية",
    time: "٤٥ دقيقة",
    difficulty: "سهل"
  },
  {
    name: "برياني عربي",
    ingredients: ["رز", "دجاج", "بهارات", "زبيب"],
    method: "يُخلط الأرز مع الدجاج المتبل والبهارات والزبيب للحصول على نكهة شرقية مميزة.",
    category: "أطباق رئيسية",
    time: "١.٥ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "مسقعة",
    ingredients: ["باذنجان", "طماطم", "بصل", "لحم مفروم"],
    method: "تُقلى شرائح الباذنجان وتُرتب مع اللحم وصلصة الطماطم وتُخبز حتى تتماسك.",
    category: "أطباق رئيسية",
    time: "١ ساعة",
    difficulty: "متوسط"
  },
  {
    name: "كوشري مصري",
    ingredients: ["عدس", "مكرونة", "رز", "بصل"],
    method: "تُخلط المكونات المسلوقة مع صلصة الطماطم وتُزيّن بالبصل المقلي.",
    category: "أطباق رئيسية",
    time: "١ ساعة",
    difficulty: "سهل"
  },
  {
    name: "مندي يمني",
    ingredients: ["رز", "دجاج", "فحم", "بهارات"],
    method: "يُطبخ الأرز مع الدجاج والبهارات ويُعطّر بالدخان للحصول على نكهة المندي المميزة.",
    category: "أطباق رئيسية",
    time: "٢ ساعة",
    difficulty: "صعب"
  },
  {
    name: "محاشي مشكلة",
    ingredients: ["كوسا", "فلفل", "باذنجان", "رز"],
    method: "تُحشى الخضروات بخليط الأرز والطماطم والتوابل وتُطهى في قدر مع الصلصة.",
    category: "أطباق رئيسية",
    time: "٢ ساعة",
    difficulty: "صعب"
  },
  {
    name: "فتة حمص",
    ingredients: ["حمص", "خبز", "لبن", "ثوم"],
    method: "يُحمّر الخبز ويُخلط مع الحمص واللبن والثوم وتُقدّم دافئة مع زيت الزيتون.",
    category: "أطباق رئيسية",
    time: "٣٠ دقيقة",
    difficulty: "سهل"
  }
];

// نظام التبويبات
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // إزالة النشاط من جميع الأزرار والمحتويات
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // إضافة النشاط للعناصر المحددة
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
    
    // إخفاء النتائج السابقة
    resultBox.classList.add('hidden');
    searchResults.classList.add('hidden');
  });
});

// دالة البحث عن الوصفات (البحث بالمكونات)
function findRecipe(userInput) {
  const words = userInput.split(/[،,\s]+/).filter(Boolean);

  // البحث عن وصفة تحتوي على معظم المكونات
  let found = recipes.find((r) =>
    r.ingredients.some((i) => words.includes(i))
  );

  // إذا لم نجد وصفة، نبحث عن الأقرب
  if (!found) {
    const suggestions = recipes
      .map((r) => {
        const matches = r.ingredients.filter((i) =>
          words.some((w) => i.includes(w) || w.includes(i))
        ).length;
        return { recipe: r, score: matches };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);

    return { found: null, suggestions };
  }

  return { found, suggestions: [] };
}

// دالة البحث باسم الوصفة
function searchRecipeByName(query) {
  const cleanQuery = query.replace(/\s+/g, "").toLowerCase();

  // بحث جزئي مطور
  const recipe = recipes.find(r => {
    const cleanName = r.name.replace(/\s+/g, "").toLowerCase();
    return cleanName.includes(cleanQuery) || cleanQuery.includes(cleanName) ||
           r.name.toLowerCase().includes(query.toLowerCase());
  });

  if (recipe) {
    return { found: recipe, suggestions: [] };
  } else {
    // اقتراحات مطورة
    const suggestions = recipes
      .filter(r => {
        const cleanName = r.name.replace(/\s+/g, "").toLowerCase();
        return cleanName.includes(cleanQuery.slice(0, 2)) || 
               r.name.toLowerCase().includes(query.toLowerCase().slice(0, 2));
      })
      .slice(0, 3);

    return { found: null, suggestions: suggestions.map(s => ({ recipe: s, score: 0 })) };
  }
}

// حدث الضغط على زر البحث بالمكونات
btn.addEventListener("click", () => {
  const ingredients = input.value.trim();
  if (ingredients === "") {
    alert("الرجاء إدخال المكونات أولاً 🙏");
    return;
  }

  loader.classList.remove("hidden");
  resultBox.classList.add("hidden");
  searchResults.classList.add("hidden");

  setTimeout(() => {
    const { found, suggestions } = findRecipe(ingredients);

    loader.classList.add("hidden");
    resultBox.classList.remove("hidden");

    if (found) {
      resultBox.innerHTML = `
        <div class="recipe-header">
          <h2><i class="fas fa-utensils"></i> الوصفة المقترحة</h2>
          <div class="recipe-meta">
            <span class="category"><i class="fas fa-tag"></i> ${found.category}</span>
            <span class="time"><i class="fas fa-clock"></i> ${found.time}</span>
            <span class="difficulty ${found.difficulty}"><i class="fas fa-signal"></i> ${found.difficulty}</span>
          </div>
        </div>
        <h3>${found.name}</h3>
        <div class="recipe-content">
          <div class="ingredients-section">
            <h4><i class="fas fa-list"></i> المكونات:</h4>
            <ul>
              ${found.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
          </div>
          <div class="method-section">
            <h4><i class="fas fa-mortar-pestle"></i> طريقة التحضير:</h4>
            <p>${found.method}</p>
          </div>
        </div>
      `;
    } else {
      resultBox.innerHTML = `
        <h2><i class="fas fa-search"></i> لم يتم العثور على وصفة مطابقة</h2>
        <p>لكن إليك بعض الاقتراحات القريبة من المكونات التي أدخلتها:</p>
        <div class="suggestions-grid">
          ${suggestions
            .map(
              (s) => `
              <div class="suggestion-card">
                <h4>${s.recipe.name}</h4>
                <p><strong>المكونات:</strong> ${s.recipe.ingredients.join("، ")}</p>
                <div class="recipe-meta">
                  <span class="time"><i class="fas fa-clock"></i> ${s.recipe.time}</span>
                  <span class="difficulty ${s.recipe.difficulty}">${s.recipe.difficulty}</span>
                </div>
              </div>
              `
            )
            .join("")}
        </div>
      `;
    }
  }, 1300);
});

// حدث الضغط على زر البحث باسم الوصفة
searchBtn.addEventListener("click", () => {
  const query = recipeInput.value.trim();
  searchResults.innerHTML = "";

  if (!query) {
    searchResults.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-triangle"></i> الرجاء إدخال اسم الأكلة.</div>`;
    return;
  }

  loader.classList.remove("hidden");
  searchResults.classList.add("hidden");
  resultBox.classList.add("hidden");

  setTimeout(() => {
    const { found, suggestions } = searchRecipeByName(query);

    loader.classList.add("hidden");
    searchResults.classList.remove("hidden");

    if (found) {
      searchResults.innerHTML = `
        <div class="recipe-header">
          <h2><i class="fas fa-check-circle"></i> تم العثور على الوصفة</h2>
          <div class="recipe-meta">
            <span class="category"><i class="fas fa-tag"></i> ${found.category}</span>
            <span class="time"><i class="fas fa-clock"></i> ${found.time}</span>
            <span class="difficulty ${found.difficulty}"><i class="fas fa-signal"></i> ${found.difficulty}</span>
          </div>
        </div>
        <h3>${found.name}</h3>
        <div class="recipe-content">
          <div class="ingredients-section">
            <h4><i class="fas fa-list"></i> المكونات:</h4>
            <ul>
              ${found.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
          </div>
          <div class="method-section">
            <h4><i class="fas fa-mortar-pestle"></i> طريقة التحضير:</h4>
            <p>${found.method}</p>
          </div>
        </div>
      `;
    } else {
      if (suggestions.length > 0) {
        searchResults.innerHTML = `
          <h2><i class="fas fa-search"></i> لم يتم العثور على وصفة مطابقة</h2>
          <p>لكن إليك بعض الاقتراحات المشابهة:</p>
          <div class="suggestions-grid">
            ${suggestions
              .map(s => `
                <div class="suggestion-card">
                  <h4>${s.recipe.name}</h4>
                  <p><strong>المكونات:</strong> ${s.recipe.ingredients.join("، ")}</p>
                  <div class="recipe-meta">
                    <span class="time"><i class="fas fa-clock"></i> ${s.recipe.time}</span>
                    <span class="difficulty ${s.recipe.difficulty}">${s.recipe.difficulty}</span>
                  </div>
                  <button class="view-recipe-btn" data-recipe="${s.recipe.name}">
                    <i class="fas fa-eye"></i> عرض الوصفة
                  </button>
                </div>
              `).join("")}
          </div>
        `;
        
        // إضافة event listeners للأزرار الجديدة
        document.querySelectorAll('.view-recipe-btn').forEach(button => {
          button.addEventListener('click', () => {
            const recipeName = button.getAttribute('data-recipe');
            recipeInput.value = recipeName;
            searchBtn.click();
          });
        });
      } else {
        searchResults.innerHTML = `
          <div class="error-message">
            <i class="fas fa-times-circle"></i>
            <h3>لم يتم العثور على أي وصفة أو اقتراح مشابه.</h3>
            <p>جرب البحث بمكونات مختلفة أو تحقق من كتابة اسم الوصفة.</p>
          </div>
        `;
      }
    }
  }, 1000);
});

// إضافة دعم زر Enter للبحث باسم الوصفة
recipeInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// الأمثلة السريعة للمكونات
document.querySelectorAll('.example-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const ingredients = chip.getAttribute('data-ingredients');
    input.value = ingredients;
  });
});

// الأمثلة السريعة للوصفات
document.querySelectorAll('.recipe-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const recipeName = chip.getAttribute('data-recipe');
    recipeInput.value = recipeName;
  });
});

// إضافة بعض الأنماط الإضافية عبر JavaScript
const additionalStyles = `
  .recipe-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  
  .recipe-meta {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  
  .recipe-meta span {
    background: rgba(255,255,255,0.2);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9em;
  }
  
  .difficulty.سهل { background: #48bb78 !important; }
  .difficulty.متوسط { background: #ed8936 !important; }
  .difficulty.صعب { background: #e53e3e !important; }
  
  .recipe-content {
    display: grid;
    gap: 25px;
    margin-top: 20px;
  }
  
  .ingredients-section, .method-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;
    border-right: 4px solid #667eea;
  }
  
  .ingredients-section ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }
  
  .ingredients-section li {
    padding: 8px 0;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
  }
  
  .ingredients-section li:before {
    content: "•";
    color: #667eea;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .suggestions-grid {
    display: grid;
    gap: 15px;
    margin-top: 20px;
  }
  
  .suggestion-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
  }
  
  .suggestion-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .view-recipe-btn {
    background: #667eea;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.3s ease;
  }
  
  .view-recipe-btn:hover {
    background: #5a6fd8;
    transform: translateY(-1px);
  }
  
  .error-message {
    text-align: center;
    padding: 30px;
    color: #e53e3e;
  }
  
  .error-message i {
    font-size: 3em;
    margin-bottom: 15px;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);