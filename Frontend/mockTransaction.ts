export interface FormattedTransaction {
  id: string;
  name: string;
  time: string;
  amount: string;
  type: string;
  avatar?: string;
}
export interface TransactionSection {
  sectionTitle: string;
  data: FormattedTransaction[];
}

export const mockTransactions = [
  {
    id: "1",
    sender: "Alice",
    receiver: "Bob",
    note: "For pizza 🍕",
    amount: 12.5,
    time: "2h ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    sender: "David",
    receiver: "Emily",
    note: "Rent",
    amount: 300,
    time: "1d ago",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  // ... more mock data
];

export const formatTransactions = (): TransactionSection[] => {
  const todayTransactions: FormattedTransaction[] = [];
  const yesterdayTransactions: FormattedTransaction[] = [];
  const olderTransactions: FormattedTransaction[] = [];

  mockTransactions.forEach((transaction) => {
    const formattedTransaction: FormattedTransaction = {
      id: transaction.id,
      name: transaction.sender,
      time: transaction.time,
      amount: `-$${transaction.amount.toFixed(2)}`,
      type: transaction.note,
      avatar: transaction.avatar,
    };

    if (transaction.time.includes("h ago")) {
      todayTransactions.push(formattedTransaction);
    } else if (transaction.time.includes("1d ago")) {
      yesterdayTransactions.push(formattedTransaction);
    } else {
      olderTransactions.push(formattedTransaction);
    }
  });

  const sections: TransactionSection[] = [];

  if (todayTransactions.length > 0) {
    sections.push({
      sectionTitle: "Today",
      data: todayTransactions,
    });
  }

  if (yesterdayTransactions.length > 0) {
    sections.push({
      sectionTitle: "Yesterday",
      data: yesterdayTransactions,
    });
  }

  if (olderTransactions.length > 0) {
    sections.push({
      sectionTitle: "Earlier",
      data: olderTransactions,
    });
  }

  return sections;
};
