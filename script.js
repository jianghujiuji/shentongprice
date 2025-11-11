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
    "新疆维吾尔自治区": { "special_formula": true, "base": 16, "per_kg": 12 },
    "西藏自治区": { "special_formula": true, "base": 16, "per_kg": 12 },
};

// 步骤 2: 附加费数据
const provinceSurcharges = {
    "新疆维吾尔自治区": 0.5,
    "西藏自治区": 0.5,
    "甘肃省": 0.2,
    "海南省": 0.2,
    "宁夏回族自治区": 0.2,
    "内蒙古自治区": 0.2
};
const citySurchargeRules = {
    "广东省": { "深圳市": 0.3, "广州市": 0.2 },
    "江苏省": { "苏州市": 0.3, "南京市": 0.1 },
    "浙江省": { "杭州市": 0.2 },
    "福建省": { "厦门市": 0.1 }
};

// 步骤 3: 核心费用计算函数 (返回一个包含详情的对象)
function calculateShippingFee(province, city, billingWeight) {
    // 验证
    if (billingWeight <= 0 || isNaN(billingWeight)) {
        return { error: "计费重量无效" };
    }
    if (!pricingData[province]) {
        return { error: `找不到省份 '${province}' 的价格信息` };
    }

    const rules = pricingData[province];
    let baseFee = 0;

    // 1. 计算基础运费
    if (rules.special_formula) {
        if (billingWeight <= 1) {
            baseFee = rules.base;
        } else {
            baseFee = rules.base + (billingWeight - 1) * rules.per_kg;
        }
    } else {
        if (billingWeight <= 1) {
            baseFee = rules["0-1"];
        } else if (billingWeight <= 2) {
            baseFee = rules["1-2"];
        } else if (billingWeight <= 3) {
            baseFee = rules["2-3"];
        } else if (billingWeight <= 10) {
            const formula = rules["3-10"];
            baseFee = formula.base + billingWeight * formula.per_kg;
        } else if (billingWeight <= 999) {
            const formula = rules["10-999"];
            baseFee = formula.base + billingWeight * formula.per_kg;
        } else {
            return { error: "重量超过999kg，请联系客服" };
        }
    }

    // 2. 计算附加费
    let surcharge = 0;
    const cityRules = citySurchargeRules[province];
    if (cityRules) {
        surcharge = cityRules[city] || 0;
    } else {
        surcharge = provinceSurcharges[province] || 0;
    }

    // 3. 计算总费用
    const totalFee = baseFee + surcharge;

    // 4. 确定目的地字符串
    let destination = province;
    if (city && city !== "其他城市") {
        destination = `${province} / ${city}`;
    }

    // 返回一个包含所有信息的对象
    return {
        billingWeight: billingWeight,
        destination: destination,
        baseFee: baseFee,
        surcharge: surcharge,
        totalFee: totalFee,
        error: null
    };
}

// 步骤 4: 页面加载后, 绑定事件
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 获取所有页面元素 ---
    const provinceSelect = document.getElementById('province-select');
    const cityFormGroup = document.getElementById('city-form-group');
    const citySelect = document.getElementById('city-select');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultOutput = document.getElementById('result-output');

    const actualWeightInput = document.getElementById('actual-weight-input');
    const lengthInput = document.getElementById('length-input');
    const widthInput = document.getElementById('width-input');
    const heightInput = document.getElementById('height-input');

    const actualResultDisplay = document.getElementById('actual-result-display');
    const volumeResultDisplay = document.getElementById('volume-result-display');

    // --- 2. 填充省份下拉菜单 ---
    const provinces = Object.keys(pricingData);
    for (const province of provinces) {
        const option = document.createElement('option');
        option.value = province; option.textContent = province;
        provinceSelect.appendChild(option);
    }

    // --- 3. 监听省份选择 (用于二级联动) ---
    provinceSelect.addEventListener('change', () => {
        const selectedProvince = provinceSelect.value;
        const cities = citySurchargeRules[selectedProvince];
        citySelect.innerHTML = '';
        if (cities) {
            cityFormGroup.classList.add('visible');
            for (const city in cities) {
                const option = document.createElement('option');
                option.value = city; option.textContent = city;
                citySelect.appendChild(option);
            }
            const otherOption = document.createElement('option');
            otherOption.value = "其他城市"; otherOption.textContent = "其他城市";
            citySelect.appendChild(otherOption);
        } else {
            cityFormGroup.classList.remove('visible');
        }
    });

    // --- 4. "计算"按钮的点击事件 (核心逻辑) ---
    calculateBtn.addEventListener('click', () => {
        // --- A. 获取和验证所有输入 ---
        const selectedProvince = provinceSelect.value;
        const selectedCity = citySelect.value;

        // 使用 || 0 来处理空输入, 确保它们是数字0而不是NaN
        const actualWeight = parseFloat(actualWeightInput.value) || 0;
        const length = parseFloat(lengthInput.value) || 0;
        const width = parseFloat(widthInput.value) || 0;
        const height = parseFloat(heightInput.value) || 0;

        let hasError = false;
        resultOutput.innerHTML = ""; // 清空主结果区域

        // --- B. 区域一: 实际重量计算 ---
        let actualFeeResult = null;
        if (actualWeight > 0) {
            actualFeeResult = calculateShippingFee(selectedProvince, selectedCity, actualWeight);
            if (actualFeeResult.error) {
                actualResultDisplay.innerHTML = `<span style="color: red;">${actualFeeResult.error}</span>`;
                hasError = true;
            } else {
                actualResultDisplay.innerHTML = `价格: <span class="price">${actualFeeResult.totalFee.toFixed(2)} 元</span>`;
            }
        } else {
            actualResultDisplay.innerHTML = "请输入有效的实际重量";
        }

        // --- C. 区域二: 体积重量计算 ---
        let volumeFeeResult = null;
        let volumetricWeight = 0;
        if (length > 0 && width > 0 && height > 0) {
            volumetricWeight = (length * width * height) / 8000;
            volumeFeeResult = calculateShippingFee(selectedProvince, selectedCity, volumetricWeight);

            if (volumeFeeResult.error) {
                volumeResultDisplay.innerHTML = `<span style="color: red;">${volumeFeeResult.error}</span>`;
                hasError = true;
            } else {
                volumeResultDisplay.innerHTML = `计泡: ${volumetricWeight.toFixed(2)} kg | 价格: <span class="price">${volumeFeeResult.totalFee.toFixed(2)} 元</span>`;
            }
        } else {
            volumeResultDisplay.innerHTML = "请输入有效的长宽高";
        }

        // --- D. 区域三: 最终总结 ---
        if (actualWeight <= 0 && volumetricWeight <= 0) {
            resultOutput.innerHTML = `<p style="color: red;">请输入至少一种重量（实际重量或体积）</p>`;
            return; // 至少需要一种重量
        }
        if (hasError) {
            resultOutput.innerHTML = `<p style="color: red;">计算中止，请检查上方区域的错误信息</p>`;
            return; // 如果子计算有错，不进行总结
        }

        // 决定最终的计费重量和费用
        const finalBillingWeight = Math.max(actualWeight, volumetricWeight);
        let finalFeeResult = null;

        // 找出对应的费用结果
        if (volumetricWeight > actualWeight) {
            finalFeeResult = volumeFeeResult;
        } else {
            finalFeeResult = actualFeeResult;
        }

        // 处理只输入了其中一种重量的特殊情况
        if (!finalFeeResult) {
            finalFeeResult = actualFeeResult || volumeFeeResult;
        }

        // 生成总结报告
        let weightReport = `
            <div class="weight-details">
                <p><strong>实际重量:</strong> ${actualWeight.toFixed(2)} kg</p>
        `;

        if (volumetricWeight > 0) {
            weightReport += `
                <p><strong>体积重量:</strong> ${volumetricWeight.toFixed(2)} kg 
                    <span class="dim-note">(${length}x${width}x${height}/8000)</span>
                </p>
                <p><strong>最终计费重量:</strong> ${finalBillingWeight.toFixed(2)} kg (取最大值)</p>
            `;
        }
        weightReport += `</div>`;

        // 生成费用报告
        let feeReport = `
            <p><strong>目的地:</strong> ${finalFeeResult.destination}</p>
            <p><strong>基础运费:</strong> ${finalFeeResult.baseFee.toFixed(2)} 元</p>
            <p><strong>附加费:</strong> ${finalFeeResult.surcharge.toFixed(2)} 元</p>
            <p class="total-fee-highlight"><strong>总费用: ${finalFeeResult.totalFee.toFixed(2)} 元</strong></p>
        `;

        resultOutput.innerHTML = weightReport + feeReport;
    });
});