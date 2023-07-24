export const nameList = () => useState('name', () => {
    return {
      input: [
        { text: "複合仕訳入力" },
        { text: "元帳入力" },
        { text: "通帳入力" },
      ],
      output1:[
        {text:"仕訳帳"},
        {text:"合計残高試算表"},
        {text:"総勘定元帳"},
        {text:"個人出納帳"},
      ],
      output2:[
        { text: "出納帳" },
        { text: "補助科目合計残高表" },
        { text: "補助元帳" },
        { text: "経費精算申請" },
      ],
      output3:[
        { text: "仕訳検索" },
        { text: "消費税課税区分別集計表" },
        { text: "月次比較財務諸表" },
        { text: "経費精算承認" },
      ],
    }
  })