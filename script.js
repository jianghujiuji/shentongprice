// 价格数据
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
    "新疆维吾尔自治区": { "special_formula": true, "base": 16, "per_kg": 12 },
    "西藏自治区": { "special_formula": true, "base": 16, "per_kg": 12 },
};

// 附加费数据
const surcharges = {
    "新疆维吾尔自治区": 0.5,
    "西藏自治区": 0.5,
    "甘肃省": 0.2,
    "海南省": 0.2,
    "宁夏回族自治区": 0.2,
    "内蒙古自治区": 0.2,
};

// 核心计算函数
function calculateShippingFee(province, weight) {
    if (!pricingData[province]) {
        return `<p style="color: red;">错误：找不到省份 '${province}' 的价格信息。</p>`;
    }
    if (weight <= 0) {
        return `<p style="color: red;">错误：重量必须大于0。</p>`;
    }

    const rules = pricingData[province];
    let baseFee = 0;

    if (rules.special_formula) {
        if (weight <= 1) {
            baseFee = rules.base;
        } else {
            baseFee = rules.base + (weight - 1) * rules.per_kg;
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
            baseFee = formula.base + weight * formula.per_kg;
        } else if (weight <= 999) {
            const formula = rules["10-999"];
            baseFee = formula.base + weight * formula.per_kg;
        } else {
            return `<p style="color: red;">错误：重量超过999kg，请联系客服。</p>`;
        }
    }

    const surcharge = surcharges[province] || 0;
    const totalFee = baseFee + surcharge;

    // 返回包含HTML标签的字符串，用于显示
    return `
        <p><strong>目的地:</strong> ${province}</p>
        <p><strong>重量:</strong> ${weight.toFixed(2)} kg</p>
        <p><strong>基础运费:</strong> ${baseFee.toFixed(2)} 元</p>
        <p><strong>附加费:</strong> ${surcharge.toFixed(2)} 元</p>
        <p class="total-fee-highlight"><strong>总费用: ${totalFee.toFixed(2)} 元</strong></p>
    `;
}

// 页面加载完成后运行的脚本
document.addEventListener('DOMContentLoaded', () => {
    // 获取页面元素
    const provinceSelect = document.getElementById('province-select');
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

    // 为“计算”按钮添加点击事件
    calculateBtn.addEventListener('click', () => {
        const selectedProvince = provinceSelect.value;
        const weight = parseFloat(weightInput.value);

        // 输入验证
        if (isNaN(weight)) {
            resultOutput.innerHTML = `<p style="color: red;">请输入有效的重量！</p>`;
            return;
        }

        // 调用计算函数
        const result = calculateShippingFee(selectedProvince, weight);

        // 使用 .innerHTML 将结果（包含HTML标签）渲染到页面上
        resultOutput.innerHTML = result;
    });
});