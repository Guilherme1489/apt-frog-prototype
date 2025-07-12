import { useState } from 'react';

export default function APTFrogApp() {
  const [form, setForm] = useState({
    data: '',
    turno: '',
    operador: '',
    setor: '',
    atividades: '',
    problemas: '',
    pendencias: '',
  });

  const [relatorio, setRelatorio] = useState('');

  const gerarRelatorio = () => {
    const r = \`RELATÓRIO DE MANUTENÇÃO – TURNO \${form.turno.toUpperCase()}
📅 Data: \${form.data}
👷‍♂️ Responsável: \${form.operador}
📍 Setor: \${form.setor}

1. Atividades Realizadas:
\${form.atividades || 'Nenhuma'}

2. Problemas Identificados:
\${form.problemas || 'Nenhum'}

3. Ações Corretivas Pendentes:
\${form.pendencias || 'Nenhuma'}\`;
    setRelatorio(r);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>APT-FROG - Protótipo</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input placeholder="Data" value={form.data} onChange={e => setForm({ ...form, data: e.target.value })} />
        <input placeholder="Turno (A/B/C)" value={form.turno} onChange={e => setForm({ ...form, turno: e.target.value })} />
        <input placeholder="Nome do Operador" value={form.operador} onChange={e => setForm({ ...form, operador: e.target.value })} />
        <input placeholder="Setor" value={form.setor} onChange={e => setForm({ ...form, setor: e.target.value })} />
        <textarea placeholder="Atividades Realizadas" value={form.atividades} onChange={e => setForm({ ...form, atividades: e.target.value })} />
        <textarea placeholder="Problemas Identificados" value={form.problemas} onChange={e => setForm({ ...form, problemas: e.target.value })} />
        <textarea placeholder="Ações Corretivas Pendentes" value={form.pendencias} onChange={e => setForm({ ...form, pendencias: e.target.value })} />
        <button onClick={gerarRelatorio}>Gerar Relatório</button>
      </div>
      {relatorio && (
        <pre style={{ whiteSpace: 'pre-wrap', marginTop: 20, backgroundColor: '#f4f4f4', padding: 10 }}>{relatorio}</pre>
      )}
    </div>
  );
}