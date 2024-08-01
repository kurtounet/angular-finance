

import { Itransaction } from "../models/transaction.model";

export const mockTransactions: Itransaction[] = [
  // Salaire
  { id: 1, date: new Date('2024-07-01'), category: "Salaire", subCategory: "Paie", title: "Paie mensuelle", amount: 2500, typeOperation: "CB", type: "entree" },
  { id: 21, date: new Date('2024-01-15'), category: "Salaire", subCategory: "Prime", title: "Prime annuelle", amount: 1000, typeOperation: "Chèque", type: "entree" },
  { id: 22, date: new Date('2024-02-10'), category: "Salaire", subCategory: "Remboursement", title: "Remboursement frais professionnels", amount: 200, typeOperation: "Virement", type: "entree" },
  { id: 23, date: new Date('2024-03-05'), category: "Salaire", subCategory: "Bonus", title: "Bonus de performance", amount: 500, typeOperation: "Retrait", type: "entree" },
  { id: 24, date: new Date('2024-04-20'), category: "Salaire", subCategory: "Indemnité", title: "Indemnité de déplacement", amount: 150, typeOperation: "CB", type: "entree" },
  { id: 25, date: new Date('2024-05-25'), category: "Salaire", subCategory: "Horaire", title: "Salaire horaire", amount: 1200, typeOperation: "Espece", type: "entree" },

  // Loyer
  { id: 2, date: new Date('2024-07-05'), category: "Loyer", subCategory: "Mensuel", title: "Loyer mensuel", amount: 800, typeOperation: "CB", type: "sortie" },
  { id: 26, date: new Date('2024-01-10'), category: "Loyer", subCategory: "Caution", title: "Caution", amount: 1600, typeOperation: "CB", type: "sortie" },
  { id: 27, date: new Date('2024-02-05'), category: "Loyer", subCategory: "Charges", title: "Charges locatives", amount: 100, typeOperation: "CB", type: "sortie" },
  { id: 28, date: new Date('2024-03-15'), category: "Loyer", subCategory: "Réparation", title: "Réparation de plomberie", amount: 200, typeOperation: "CB", type: "sortie" },
  { id: 29, date: new Date('2024-04-25'), category: "Loyer", subCategory: "Entretien", title: "Entretien de la chaudière", amount: 120, typeOperation: "CB", type: "sortie" },
  { id: 30, date: new Date('2024-05-30'), category: "Loyer", subCategory: "Augmentation", title: "Augmentation de loyer", amount: 50, typeOperation: "CB", type: "sortie" },

  // Alimentation
  { id: 3, date: new Date('2024-07-10'), category: "Alimentation", subCategory: "Courses", title: "Courses hebdomadaires", amount: 150, typeOperation: "CB", type: "sortie" },
  { id: 31, date: new Date('2024-01-20'), category: "Alimentation", subCategory: "Restaurant", title: "Dîner au restaurant", amount: 60, typeOperation: "CB", type: "sortie" },
  { id: 32, date: new Date('2024-02-10'), category: "Alimentation", subCategory: "Bio", title: "Achat de produits bio", amount: 80, typeOperation: "CB", type: "sortie" },
  { id: 33, date: new Date('2024-03-08'), category: "Alimentation", subCategory: "Café", title: "Petit déjeuner au café", amount: 20, typeOperation: "CB", type: "sortie" },
  { id: 34, date: new Date('2024-04-15'), category: "Alimentation", subCategory: "Snacks", title: "Snacks et boissons", amount: 30, typeOperation: "CB", type: "sortie" },
  { id: 35, date: new Date('2024-05-10'), category: "Alimentation", subCategory: "Événement", title: "Fête de famille", amount: 200, typeOperation: "CB", type: "sortie" },

  // Transports
  { id: 4, date: new Date('2024-07-15'), category: "Transports", subCategory: "Train", title: "Billet de train", amount: 60, typeOperation: "CB", type: "sortie" },
  { id: 36, date: new Date('2024-01-12'), category: "Transports", subCategory: "Abonnement", title: "Abonnement bus", amount: 50, typeOperation: "CB", type: "sortie" },
  { id: 37, date: new Date('2024-02-18'), category: "Transports", subCategory: "Voiture", title: "Réparation de voiture", amount: 300, typeOperation: "CB", type: "sortie" },
  { id: 38, date: new Date('2024-03-22'), category: "Transports", subCategory: "Carburant", title: "Carburant", amount: 60, typeOperation: "CB", type: "sortie" },
  { id: 39, date: new Date('2024-04-27'), category: "Transports", subCategory: "Taxi", title: "Taxi", amount: 25, typeOperation: "CB", type: "sortie" },
  { id: 40, date: new Date('2024-05-29'), category: "Transports", subCategory: "Péages", title: "Péages autoroutiers", amount: 15, typeOperation: "CB", type: "sortie" },

  // Factures
  { id: 5, date: new Date('2024-07-20'), category: "Factures", subCategory: "Électricité", title: "Facture électricité", amount: 100, typeOperation: "CB", type: "sortie" },
  { id: 41, date: new Date('2024-01-30'), category: "Factures", subCategory: "Internet", title: "Facture internet", amount: 40, typeOperation: "CB", type: "sortie" },
  { id: 42, date: new Date('2024-02-15'), category: "Factures", subCategory: "Téléphone", title: "Facture téléphone", amount: 30, typeOperation: "CB", type: "sortie" },
  { id: 43, date: new Date('2024-03-18'), category: "Factures", subCategory: "Eau", title: "Facture d'eau", amount: 60, typeOperation: "CB", type: "sortie" },
  { id: 44, date: new Date('2024-04-05'), category: "Factures", subCategory: "TV", title: "Abonnement TV", amount: 20, typeOperation: "CB", type: "sortie" },
  { id: 45, date: new Date('2024-05-11'), category: "Factures", subCategory: "Gaz", title: "Facture gaz", amount: 90, typeOperation: "CB", type: "sortie" },

  // Santé
  { id: 6, date: new Date('2024-07-25'), category: "Santé", subCategory: "Pharmacie", title: "Pharmacie", amount: 30, typeOperation: "CB", type: "sortie" },
  { id: 46, date: new Date('2024-01-13'), category: "Santé", subCategory: "Consultation", title: "Consultation médicale", amount: 50, typeOperation: "CB", type: "sortie" },
  { id: 47, date: new Date('2024-02-20'), category: "Santé", subCategory: "Optique", title: "Achat de lunettes", amount: 200, typeOperation: "CB", type: "sortie" },
  { id: 48, date: new Date('2024-03-15'), category: "Santé", subCategory: "Thérapie", title: "Thérapie", amount: 80, typeOperation: "CB", type: "sortie" },
  { id: 49, date: new Date('2024-04-19'), category: "Santé", subCategory: "Vitamines", title: "Achat de vitamines", amount: 30, typeOperation: "CB", type: "sortie" },
  { id: 50, date: new Date('2024-05-24'), category: "Santé", subCategory: "Examen", title: "Examen médical", amount: 100, typeOperation: "CB", type: "sortie" },

   
  ]
