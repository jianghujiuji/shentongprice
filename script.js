// 步骤 1: 基础价格数据 
const pricingData = {
    "河南省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 0.5 }, "10-999": { "base": 3.5, "per_kg": 0.7 } },
    "安徽省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "广西壮族自治区": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "河北省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "湖北省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "湖南省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "江西省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "山东省": { "0-1": 2, "1-2": 2.65, "2-3": 3.1, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "福建省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "广东省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "江苏省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "浙江省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "山西省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "陕西省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "黑龙江省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "吉林省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "辽宁省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "四川省": { "0-1": 2, "1-2": 2.75, "2-3": 3.2, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "贵州省": { "0-1": 2.1, "1-2": 2.85, "2-3": 3.3, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "天津": { "0-1": 2.1, "1-2": 2.85, "2-3": 3.3, "3-10": { "base": 3.5, "per_kg": 1 }, "10-999": { "base": 3.5, "per_kg": 1.2 } },
    "云南省": { "0-1": 2.1, "1-2": 2.85, "2-3": 3.3, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "重庆": { "0-1": 2.1, "1-2": 2.85, "2-3": 3.3, "3-10": { "base": 3.5, "per_kg": 1.5 }, "10-999": { "base": 3.5, "per_kg": 1.8 } },
    "甘肃省": { "0-1": 2.3, "1-2": 3.05, "2-3": 3.5, "3-10": { "base": 6, "per_kg": 6 }, "10-999": { "base": 6, "per_kg": 6 } },
    "海南省": { "0-1": 2.3, "1-2": 3.05, "2-3": 3.5, "3-10": { "base": 6, "per_kg": 6 }, "10-999": { "base": 6, "per_kg": 6 } },
    "内蒙古自治区": { "0-1": 2.3, "1-2": 3.05, "2-3": 3.5, "3-10": { "base": 6, "per_kg": 6 }, "10-999": { "base": 6, "per_kg": 6 } },
    "宁夏回族自治区": { "0-1": 2.3, "1-2": 3.05, "2-3": 3.5, "3-10": { "base": 6, "per_kg": 6 }, "10-999": { "base": 6, "per_kg": 6 } },
    "青海省": { "0-1": 2.3, "1-2": 3.05, "2-3": 3.5, "3-10": { "base": 6, "per_kg": 6 }, "10-999": { "base": 6, "per_kg": 6 } },
    "上海": { "0-1": 2.8, "1-2": 3.55, "2-3": 4, "3-10": { "base": 4.3, "per_kg": 1 }, "10-999": { "base": 4.3, "per_kg": 1.2 } },
    "北京": { "0-1": 3.5, "1-2": 4.25, "2-3": 4.7, "3-10": { "base": 5, "per_kg": 1 }, "10-999": { "base": 5, "per_kg": 1.2 } },
    "新疆维吾尔自治区": { "special_formula": true, "base": 16, "per_kg": 12 }, // 
    "西藏自治区": { "special_formula": true, "base": 16, "per_kg": 12 }, // 
};

// 步骤 2: 附加费数据
// 2.1: 纯省级附加费
const provinceSurcharges = {
    "新疆维吾尔自治区": 0.5,
    "西藏自治区": 0.5,
    "甘肃省": 0.2,
    "海南省": 0.2,
    "宁夏回族自治区": 0.2,
    "内蒙古自治区": 0.2
};

// 2.2: 需要二级联动的城市附加费
const citySurchargeRules = {
    "广东省": {
        "深圳市": 0.3,
        "广州市": 0.2
    },
    "江苏省": {
        "苏州市": 0.3,
        "南京市": 0.1
    },
    "浙江省": {
        "杭州市": 0.2
    },
    "福建省": {
        "厦门市": 0.1
    }
};

// 步骤 3: 核心计算函数
function calculateShippingFee(province, city, weight) {
    // 验证输入
    if (!pricingData[province]) {
        return `<p style="color: red;">错误：找不到省份 '${province}' 的价格信息。</p>`;
    }
    if (weight <= 0) {
        return `<p style="color: red;">错误:重量必须大于0。</p>`;
    }

    const rules = pricingData[province];
    let baseFee = 0;

    // --- 1. 计算基础运费 ---
    if (rules.special_formula) {
        if (weight <= 1) {
            baseFee = rules.base;
        } else {
            baseFee = rules.base + (weight - 1) * rules.per_kg; // 
        }
    } else {
        if (weight <= 1) {
            baseFee = rules["0-1"];
        } else if (weight <= 2) {
            baseFee = rules["1-2"];
        } else if (weight <= 3) {
            baseFee = rules["2-3"];
        } else if (weight <= 10) {
            const formula = rules["3-10"];
            baseFee = formula.base + weight * formula.per_kg; // 
        } else if (weight <= 999) {
            const formula = rules["10-999"];
            baseFee = formula.base + weight * formula.per_kg; // 
        } else {
            return `<p style="color: red;">错误：重量超过999kg，请联系客服。</p>`;
        }
    }

    // --- 2. 计算附加费 ---
    let surcharge = 0;
    const cityRules = citySurchargeRules[province];

    if (cityRules) {
        // 如果该省有城市规则, 则根据选择的城市获取附加费
        // 如果选了 "其他城市", cityRules[city] 会是 undefined, || 0 会使其为 0
        surcharge = cityRules[city] || 0;
    } else {
        // 否则，从省级附加费列表中获取
        surcharge = provinceSurcharges[province] || 0;
    }

    // --- 3. 计算总费用 ---
    const totalFee = baseFee + surcharge;

    // --- 4. 生成报告 ---
    let destination = province;
    if (city && city !== "其他城市") {
        destination = `${province} / ${city}`;
    }

    // 返回HTML字符串, 为总费用添加高亮class
    return `
        <p><strong>目的地:</strong> ${destination}</p>
        <p><strong>重量:</strong> ${weight.toFixed(2)} kg</p>
        <p><strong>基础运费:</strong> ${baseFee.toFixed(2)} 元</p>
        <p><strong>附加费:</strong> ${surcharge.toFixed(2)} 元</p>
        <p class="total-fee-highlight"><strong>总费用: ${totalFee.toFixed(2)} 元</strong></p>
    `;
}

// 步骤 4: 页面加载后, 绑定事件
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有页面元素
    const provinceSelect = document.getElementById('province-select');
    const cityFormGroup = document.getElementById('city-form-group');
    const citySelect = document.getElementById('city-select');
    const weightInput = document.getElementById('weight-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultOutput = document.getElementById('result-output');

    // 动态填充省份下拉菜单
    const provinces = Object.keys(pricingData);
    for (const province of provinces) {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    }

    // 监听省份选择的变化, 以显示/隐藏城市菜单
    provinceSelect.addEventListener('change', () => {
        const selectedProvince = provinceSelect.value;
        const cities = citySurchargeRules[selectedProvince];

        citySelect.innerHTML = ''; // 清空旧的城市选项

        if (cities) {
            // 如果这个省份有特殊的城市规则
            cityFormGroup.classList.add('visible'); // 显示城市下拉菜单

            // 动态添加城市选项
            for (const city in cities) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            // 添加 "其他城市" 选项
            const otherOption = document.createElement('option');
            otherOption.value = "其他城市";
            otherOption.textContent = "其他城市";
            citySelect.appendChild(otherOption);
        } else {
            // 如果没有, 隐藏城市下拉菜单
            cityFormGroup.classList.remove('visible');
        }
    });

    // "计算"按钮的点击事件
    calculateBtn.addEventListener('click', () => {
        const selectedProvince = provinceSelect.value;
        const selectedCity = citySelect.value; // 获取城市值
        const weight = parseFloat(weightInput.value);

        if (isNaN(weight) || weight <= 0) {
            resultOutput.innerHTML = `<p style="color: red;">请输入有效的重量！</p>`;
            return;
        }

        // 调用计算函数, 传入所有参数
        const result = calculateShippingFee(selectedProvince, selectedCity, weight);

        // 使用 .innerHTML 将结果(包含HTML标签)渲染到页面上
        resultOutput.innerHTML = result;
    });
});