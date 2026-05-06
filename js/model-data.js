// Model comparison data used by app.js

const MODEL_COMPARISON = {
  coding: {
    tableAriaLabel: { en: 'Top 10 coding models', he: '10 המודלים המובילים לקוד' },
    rows: [
      { rank: 1, medal: '🥇', name: 'claude-opus-4-7-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1571, bar: 100, price: '$5 / $25', context: '1M' },
      { rank: 2, medal: '🥈', name: 'claude-opus-4-7', maker: 'Anthropic', makerClass: 'anthropic', elo: 1561, bar: 89, price: '$5 / $25', context: '1M' },
      { rank: 3, medal: '🥉', name: 'claude-opus-4-6-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1548, bar: 75, price: '$5 / $25', context: '1M' },
      { rank: 4, name: 'claude-opus-4-6', maker: 'Anthropic', makerClass: 'anthropic', elo: 1543, bar: 69, price: '$5 / $25', context: '1M' },
      { rank: 5, name: 'glm-5.1', maker: 'Z.ai', makerClass: 'zai', elo: 1534, bar: 59, price: '$1.40 / $4.40', context: '202.8K' },
      { rank: 6, name: 'claude-sonnet-4-6', maker: 'Anthropic', makerClass: 'anthropic', elo: 1527, bar: 52, price: '$3 / $15', context: '1M' },
      { rank: 7, name: 'kimi-k2.6', maker: 'Moonshot', makerClass: 'moonshot', elo: 1526, bar: 51, price: '$0.95 / $4', context: '262.1K' },
      { rank: 8, name: 'muse-spark', maker: 'Meta', makerClass: 'meta', elo: 1509, bar: 32, price: 'N/A', context: 'N/A' },
      { rank: 9, name: 'gpt-5.5-high (codex-harness)', maker: 'OpenAI', makerClass: 'openai', elo: 1492, bar: 13, price: 'N/A', context: 'N/A' },
      { rank: 10, name: 'claude-opus-4-5-thinking-32k', maker: 'Anthropic', makerClass: 'anthropic', elo: 1491, bar: 12, price: '$5 / $25', context: '200K' }
    ]
  },
  text: {
    tableAriaLabel: { en: 'Top 10 text models', he: '10 המודלים המובילים לטקסט' },
    rows: [
      { rank: 1, medal: '🥇', name: 'claude-opus-4-7-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1503, bar: 100, price: '$5 / $25', context: '1M' },
      { rank: 2, medal: '🥈', name: 'claude-opus-4-6-thinking', maker: 'Anthropic', makerClass: 'anthropic', elo: 1502, bar: 96, price: '$5 / $25', context: '1M' },
      { rank: 3, medal: '🥉', name: 'claude-opus-4-6', maker: 'Anthropic', makerClass: 'anthropic', elo: 1497, bar: 77, price: '$5 / $25', context: '1M' },
      { rank: 4, name: 'gemini-3.1-pro-preview', maker: 'Google', makerClass: 'google', elo: 1493, bar: 62, price: '$2 / $12', context: '1M' },
      { rank: 5, name: 'claude-opus-4-7', maker: 'Anthropic', makerClass: 'anthropic', elo: 1491, bar: 54, price: '$5 / $25', context: '1M' },
      { rank: 6, name: 'muse-spark', maker: 'Meta', makerClass: 'meta', elo: 1491, bar: 54, price: 'N/A', context: 'N/A' },
      { rank: 7, name: 'gpt-5.5-high', maker: 'OpenAI', makerClass: 'openai', elo: 1488, bar: 42, price: '$5 / $30', context: '1.1M' },
      { rank: 8, name: 'gemini-3-pro', maker: 'Google', makerClass: 'google', elo: 1486, bar: 35, price: '$2 / $12', context: '1M' },
      { rank: 9, name: 'grok-4.20-beta1', maker: 'xAI', makerClass: 'xai', elo: 1480, bar: 12, price: 'N/A', context: 'N/A' },
      { rank: 10, name: 'grok-4.20-beta-0309-reasoning', maker: 'xAI', makerClass: 'xai', elo: 1477, bar: 4, price: '$2 / $6', context: '2M' }
    ]
  }
};
