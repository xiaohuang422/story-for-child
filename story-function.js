const axios = require('axios');

module.exports = async function (req, res) {
  const { name, age, gender, character, theme, scene, value } = req.body;
  
  const prompt = `请根据以下信息生成一个儿童故事：
  - 孩子姓名：${name}, 年龄：${age}, 性别：${gender}
  - 主角类型：${character}, 主题：${theme}, 场景：${scene}, 教育意义：${value || "无"}
  故事长度在600-1200字。`;

  // 调用大模型API
  const response = await axios.post('https://api.deepseek.com/v3/chat', {
    model: 'DeepSeek-V3',
    input: prompt
  });

  res.status(200).json({ story: response.data.text });
};
