# X-Layer Editorial System

O site Hubstry X-Layer Tech é concebido como um ensaio técnico-expositivo digital, e não como uma landing page convencional.

## Gramática obrigatória

Toda página deve desenvolver uma argumentação textual contínua antes de recorrer à síntese visual.

A estrutura editorial mínima é:

1. abertura argumentativa;
2. exposição teórica e contextual;
3. evidência documental ou empírica;
4. interpretação;
5. diagrama, grafo ou outra visualização analítica quando houver relação estrutural a representar;
6. aprofundamento por acordeão;
7. implicações e limites;
8. seção "Para quem importa";
9. fontes e referências.

## Texto

Texto corrido é o meio principal de argumentação.

Bullets devem ser excepcionais e usados apenas quando uma enumeração realmente melhorar a precisão. Não transformar argumentos em listas decorativas.

Títulos devem organizar o raciocínio, não substituir o conteúdo. Evitar títulos excessivamente grandes e páginas visualmente vazias.

## Siglas

Na primeira ocorrência, toda sigla deve aparecer com sua denominação por extenso, seguida da sigla entre parênteses.

Exemplo: Operador Nacional do Sistema Elétrico (ONS).

Depois da primeira definição, a sigla pode ser utilizada normalmente.

## Estatuto das afirmações

Distinguir explicitamente:

- dado observado;
- fonte documental;
- interpretação;
- hipótese;
- resultado de modelo;
- contrafactual;
- recomendação.

Não apresentar uma hipótese como fato nem um resultado contrafactual como resultado histórico.

## Visualização

Diagramas e grafos devem suplementar o argumento textual.

Não utilizar visualização meramente ornamental quando uma relação, fluxo, dependência ou arquitetura puder ser representada de forma semanticamente útil.

## Acordeões

Acordeões são camadas de aprofundamento editorial.

Podem conter definições técnicas, notas metodológicas, fórmulas, limitações, documentação normativa e explicações destinadas ao leitor especializado.

Não devem esconder o argumento principal.

## Para quem importa

Toda página deve conter uma seção "Para quem importa".

Ela deve ser adaptada ao assunto da página e tratar, no mínimo, quatro perspectivas:

Governo e reguladores;
investidores;
C-levels e decisores do setor privado;
founders e startups.

A seção deve explicar por que a análise daquela página importa para cada grupo. Não deve ser uma lista genérica de públicos.

## Fontes

Fontes primárias devem ser privilegiadas.

Documentos do ONS, ABDIB, União Europeia e papers da Hubstry devem ser contextualizados e distinguidos de interpretações próprias.

## Linguagem

A escrita deve ser técnico-expositiva, argumentativa e acessível a leitores não especialistas sem diluir a precisão conceitual.

O objetivo é produzir autoridade por argumentação e evidência, não por densidade visual artificial.

## Edição segura de HTML e Markdown — PowerShell

Para alterações cirúrgicas em arquivos UTF-8, evitar `Set-Content -Encoding UTF8`
e `Add-Content`: no Windows PowerShell 5.1 a regravação pode introduzir BOM ou
converter o corpo do arquivo, produzindo diffs de centenas de linhas por mudança
de codificação.

Padrão adotado — preserva o BOM original, se houver:

```powershell
$caminho = "caminho\do\arquivo"
$temBom = ([System.IO.File]::ReadAllBytes($caminho)[0..2] -join ' ') -eq '239 187 191'
$t = [System.IO.File]::ReadAllText($caminho, [System.Text.Encoding]::UTF8)
# alteração cirúrgica, com âncora confirmada como única
[System.IO.File]::WriteAllText($caminho, $t, (New-Object System.Text.UTF8Encoding $temBom))
```

Para leitura e diagnóstico, usar sempre `Get-Content -Encoding UTF8`: sem o
parâmetro, o PowerShell 5.1 lê como Latin-1 e exibe mojibake em arquivo íntegro.

Antes de qualquer alteração, confirmar que a âncora ocorre uma única vez. Depois,
verificar `git diff --stat` e confirmar que somente o bloco pretendido mudou.
