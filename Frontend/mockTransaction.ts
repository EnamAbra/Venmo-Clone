export function generateTransactionId() {
  return Date.now().toString();
}

export function generateReferenceId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length: 8 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

export function formatDate(date: Date) {
  return (
    date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) +
    " · " +
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
}

export interface FormattedTransaction {
  id: string;
  name: string;
  time: string;
  amount: string;
  type: string;
  email: string;
  avatar?: string;
  transactionId: string;
  referenceId: string;
  date: string;
  category?: "Sent" | "Request" | "Top Up" | "Withdraw";
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

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Sent",
  },
  {
    id: "2",
    sender: "David",
    receiver: "Emily",
    note: "Rent",
    amount: 300,
    time: "1d ago",
    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Top Up",
  },
  {
    id: "3",
    sender: "Mary",
    receiver: "Tim",
    note: "Food",
    amount: 500,
    time: "4d ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Withdraw",
  },
  {
    id: "4",
    sender: "Alex",
    receiver: "John",
    note: "woodwork",
    amount: 700,
    time: "6d ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Withdraw",
  },
  {
    id: "5",
    sender: "Lily",
    receiver: "Susan",
    note: "Flowers",
    amount: 500,
    time: "3d ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Request",
  },
  {
    id: "6",
    sender: "John",
    receiver: "Martha",
    note: "Groceries",
    amount: 120,
    time: "1d ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Withdraw",
  },
  {
    id: "7",
    sender: "Alice",
    receiver: "Mark",
    note: "Dinner",
    amount: 75,
    time: "5h ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Top up",
  },
  {
    id: "8",
    sender: "Michael",
    receiver: "Diana",
    note: "Taxi fare",
    amount: 15,
    time: "2d ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Sent",
  },
  {
    id: "9",
    sender: "Emma",
    receiver: "Lucas",
    note: "Concert Tickets",
    amount: 300,
    time: "6h ago",
    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=6",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Request",
  },
  {
    id: "10",
    sender: "Oliver",
    receiver: "Sophia",
    note: "Birthday Gift",
    amount: 200,
    time: "4d ago",

    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=7",
    transactionId: generateTransactionId(),
    referenceId: generateReferenceId(),
    date: formatDate(new Date()),
    category: "Sent",
  },
];
const allowedCategories = ["Sent", "Top Up", "Withdraw", "Request"] as const;

function getValidCategory(
  cat: string | undefined
): FormattedTransaction["category"] {
  return allowedCategories.includes(cat as any)
    ? (cat as FormattedTransaction["category"])
    : "Sent";
}
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
      email: transaction.email,
      avatar: transaction.avatar,
      transactionId: transaction.transactionId,
      referenceId: transaction.referenceId,
      date: transaction.date,
      category: getValidCategory(transaction.category),
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
