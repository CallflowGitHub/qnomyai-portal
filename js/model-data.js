// Model comparison data used by app.js

const MODEL_COMPARISON = {
  coding: {
    tableAriaLabel: { en: 'Top 10 coding models', he: '10 המודלים המובילים לקוד' },
    rows: [
      { rank: 1, medal: '🥇', name: 'claude-opus-4-7-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1567, bar: 100, price: '$5 / $25', context: '1M' },
      { rank: 2, medal: '🥈', name: 'claude-opus-4-7', maker: 'Anthropic', makerClass: 'anthropic', elo: 1559, bar: 90, price: '$5 / $25', context: '1M' },
      { rank: 3, medal: '🥉', name: 'claude-opus-4-6-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1546, bar: 72, price: '$5 / $25', context: '1M' },
      { rank: 4, name: 'claude-opus-4-6', maker: 'Anthropic', makerClass: 'anthropic', elo: 1541, bar: 66, price: '$5 / $25', context: '1M' },
      { rank: 5, name: 'glm-5.1', maker: 'Z.ai', makerClass: 'zai', elo: 1532, bar: 54, price: '$1.40 / $4.40', context: '202.8K' },
      { rank: 6, name: 'claude-sonnet-4-6', maker: 'Anthropic', makerClass: 'anthropic', elo: 1524, bar: 43, price: '$3 / $15', context: '1M' },
      { rank: 7, name: 'kimi-k2.6', maker: 'Moonshot', makerClass: 'moonshot', elo: 1519, bar: 37, price: '$0.95 / $4', context: '262.1K' },
      { rank: 8, name: 'muse-spark', maker: 'Meta', makerClass: 'meta', elo: 1509, bar: 24, price: 'N/A', context: 'N/A' },
      { rank: 9, name: 'gpt-5.5-xhigh (codex-harness)', maker: 'OpenAI', makerClass: 'openai', elo: 1501, bar: 13, price: 'N/A', context: 'N/A' },
      { rank: 10, name: 'qwen3.6-max-preview', maker: 'Alibaba', makerClass: 'alibaba', elo: 1491, bar: 0, price: '$1.04 / $6.24', context: '262.1K' }
    ]
  },
  text: {
    tableAriaLabel: { en: 'Top 10 text models', he: '10 המודלים המובילים לטקסט' },
    rows: [
      { rank: 1, medal: '🥇', name: 'claude-opus-4-6-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1502, bar: 100, price: '$5 / $25', context: '1M' },
      { rank: 2, medal: '🥈', name: 'claude-opus-4-7-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1500, bar: 91, price: '$5 / $25', context: '1M' },
      { rank: 3, medal: '🥉', name: 'claude-opus-4-6', maker: 'Anthropic', makerClass: 'anthropic', elo: 1498, bar: 83, price: '$5 / $25', context: '1M' },
      { rank: 4, name: 'claude-opus-4-7', maker: 'Anthropic', makerClass: 'anthropic', elo: 1492, bar: 57, price: '$5 / $25', context: '1M' },
      { rank: 5, name: 'muse-spark', maker: 'Meta', makerClass: 'meta', elo: 1490, bar: 48, price: 'N/A', context: 'N/A' },
      { rank: 6, name: 'gemini-3.1-pro-preview', maker: 'Google', makerClass: 'google', elo: 1489, bar: 44, price: '$2 / $12', context: '1M' },
      { rank: 7, name: 'gemini-3-pro', maker: 'Google', makerClass: 'google', elo: 1486, bar: 30, price: '$2 / $12', context: '1M' },
      { rank: 8, name: 'gpt-5.5-high', maker: 'OpenAI', makerClass: 'openai', elo: 1484, bar: 22, price: '$5 / $30', context: '1.1M' },
      { rank: 9, name: 'gpt-5.4-high', maker: 'OpenAI', makerClass: 'openai', elo: 1479, bar: 0, price: '$2.50 / $15', context: '1.1M' },
      { rank: 10, name: 'grok-4.20-beta1', maker: 'xAI', makerClass: 'xai', elo: 1479, bar: 0, price: 'N/A', context: 'N/A' }
    ]
  }
};
