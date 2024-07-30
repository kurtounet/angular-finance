import { Itransaction } from "../models/transaction.model";

export const mockTransactions: Itransaction[] = [
  { id: 1, date: new Date(), category: "Salaire", title: "Paie mensuelle", amount: 2500, type: "entree" },
  { id: 2, date: new Date(), category: "Loyer", title: "Loyer mensuel", amount: 800, type: "sortie" },
  { id: 3, date: new Date(), category: "Alimentation", title: "Courses hebdomadaires", amount: 150, type: "sortie" },
  { id: 4, date: new Date(), category: "Transports", title: "Billet de train", amount: 60, type: "sortie" },
  { id: 5, date: new Date(), category: "Factures", title: "Facture électricité", amount: 100, type: "sortie" },
  { id: 6, date: new Date(), category: "Santé", title: "Pharmacie", amount: 30, type: "sortie" },
  { id: 7, date: new Date(), category: "Assurances", title: "Assurance auto", amount: 200, type: "sortie" },
  { id: 8, date: new Date(), category: "Loisirs", title: "Abonnement gym", amount: 40, type: "sortie" },
  { id: 9, date: new Date(), category: "Éducation", title: "Frais scolaires", amount: 500, type: "sortie" },
  { id: 10, date: new Date(), category: "Impôts", title: "Taxe foncière", amount: 400, type: "sortie" },
  { id: 11, date: new Date(), category: "Remboursements", title: "Remboursement prêt", amount: 250, type: "sortie" },
  { id: 12, date: new Date(), category: "Épargne", title: "Dépôt mensuel", amount: 300, type: "entree" },
  { id: 13, date: new Date(), category: "Investissements", title: "Achat d'actions", amount: 1000, type: "sortie" },
  { id: 14, date: new Date(), category: "Dons", title: "Don à une ONG", amount: 50, type: "sortie" },
  { id: 15, date: new Date(), category: "Voyages", title: "Billets d'avion", amount: 1200, type: "sortie" },
  { id: 16, date: new Date(), category: "Shopping", title: "Achat de vêtements", amount: 300, type: "sortie" },
  { id: 17, date: new Date(), category: "Beauté", title: "Salon de coiffure", amount: 80, type: "sortie" },
  { id: 18, date: new Date(), category: "Animaux", title: "Nourriture pour chat", amount: 40, type: "sortie" },
  { id: 19, date: new Date(), category: "Entretien maison", title: "Réparation de plomberie", amount: 150, type: "sortie" },
  { id: 20, date: new Date(), category: "Autres", title: "Divers", amount: 100, type: "sortie" },
  // Paie mensuelle
  { id: 21, date: new Date(), category: "Salaire", title: "Prime annuelle", amount: 1000, type: "entree" },
  { id: 22, date: new Date(), category: "Salaire", title: "Remboursement frais professionnels", amount: 200, type: "entree" },
  { id: 23, date: new Date(), category: "Salaire", title: "Bonus de performance", amount: 500, type: "entree" },
  { id: 24, date: new Date(), category: "Salaire", title: "Indemnité de déplacement", amount: 150, type: "entree" },
  { id: 25, date: new Date(), category: "Salaire", title: "Salaire horaire", amount: 1200, type: "entree" },

  // Loyer
  { id: 26, date: new Date(), category: "Loyer", title: "Caution", amount: 1600, type: "sortie" },
  { id: 27, date: new Date(), category: "Loyer", title: "Charges locatives", amount: 100, type: "sortie" },
  { id: 28, date: new Date(), category: "Loyer", title: "Réparation de plomberie", amount: 200, type: "sortie" },
  { id: 29, date: new Date(), category: "Loyer", title: "Entretien de la chaudière", amount: 120, type: "sortie" },
  { id: 30, date: new Date(), category: "Loyer", title: "Augmentation de loyer", amount: 50, type: "sortie" },

  // Alimentation
  { id: 31, date: new Date(), category: "Alimentation", title: "Dîner au restaurant", amount: 60, type: "sortie" },
  { id: 32, date: new Date(), category: "Alimentation", title: "Achat de produits bio", amount: 80, type: "sortie" },
  { id: 33, date: new Date(), category: "Alimentation", title: "Petit déjeuner au café", amount: 20, type: "sortie" },
  { id: 34, date: new Date(), category: "Alimentation", title: "Snacks et boissons", amount: 30, type: "sortie" },
  { id: 35, date: new Date(), category: "Alimentation", title: "Fête de famille", amount: 200, type: "sortie" },

  // Transports
  { id: 36, date: new Date(), category: "Transports", title: "Abonnement bus", amount: 50, type: "sortie" },
  { id: 37, date: new Date(), category: "Transports", title: "Réparation de voiture", amount: 300, type: "sortie" },
  { id: 38, date: new Date(), category: "Transports", title: "Carburant", amount: 60, type: "sortie" },
  { id: 39, date: new Date(), category: "Transports", title: "Taxi", amount: 25, type: "sortie" },
  { id: 40, date: new Date(), category: "Transports", title: "Péages autoroutiers", amount: 15, type: "sortie" },

  // Factures
  { id: 41, date: new Date(), category: "Factures", title: "Facture internet", amount: 40, type: "sortie" },
  { id: 42, date: new Date(), category: "Factures", title: "Facture téléphone", amount: 30, type: "sortie" },
  { id: 43, date: new Date(), category: "Factures", title: "Facture d'eau", amount: 60, type: "sortie" },
  { id: 44, date: new Date(), category: "Factures", title: "Abonnement TV", amount: 20, type: "sortie" },
  { id: 45, date: new Date(), category: "Factures", title: "Facture gaz", amount: 90, type: "sortie" },

  // Santé
  { id: 46, date: new Date(), category: "Santé", title: "Consultation médicale", amount: 50, type: "sortie" },
  { id: 47, date: new Date(), category: "Santé", title: "Achat de lunettes", amount: 200, type: "sortie" },
  { id: 48, date: new Date(), category: "Santé", title: "Thérapie", amount: 80, type: "sortie" },
  { id: 49, date: new Date(), category: "Santé", title: "Achat de vitamines", amount: 30, type: "sortie" },
  { id: 50, date: new Date(), category: "Santé", title: "Examen médical", amount: 100, type: "sortie" },

  // Assurances
  { id: 51, date: new Date(), category: "Assurances", title: "Assurance habitation", amount: 150, type: "sortie" },
  { id: 52, date: new Date(), category: "Assurances", title: "Assurance santé", amount: 100, type: "sortie" },
  { id: 53, date: new Date(), category: "Assurances", title: "Assurance vie", amount: 200, type: "sortie" },
  { id: 54, date: new Date(), category: "Assurances", title: "Assurance voyage", amount: 50, type: "sortie" },
  { id: 55, date: new Date(), category: "Assurances", title: "Assurance téléphone", amount: 20, type: "sortie" },

  // Loisirs
  { id: 56, date: new Date(), category: "Loisirs", title: "Concert", amount: 60, type: "sortie" },
  { id: 57, date: new Date(), category: "Loisirs", title: "Cinéma", amount: 20, type: "sortie" },
  { id: 58, date: new Date(), category: "Loisirs", title: "Abonnement à une salle de sport", amount: 50, type: "sortie" },
  { id: 59, date: new Date(), category: "Loisirs", title: "Activité de loisirs", amount: 30, type: "sortie" },
  { id: 60, date: new Date(), category: "Loisirs", title: "Festival de musique", amount: 100, type: "sortie" },

  // Éducation
  { id: 61, date: new Date(), category: "Éducation", title: "Livres scolaires", amount: 100, type: "sortie" },
  { id: 62, date: new Date(), category: "Éducation", title: "Frais d'inscription", amount: 200, type: "sortie" },
  { id: 63, date: new Date(), category: "Éducation", title: "Cours particuliers", amount: 150, type: "sortie" },
  { id: 64, date: new Date(), category: "Éducation", title: "Matériel scolaire", amount: 50, type: "sortie" },
  { id: 65, date: new Date(), category: "Éducation", title: "Voyage scolaire", amount: 300, type: "sortie" },

  // Impôts
  { id: 66, date: new Date(), category: "Impôts", title: "Impôts sur le revenu", amount: 1000, type: "sortie" },
  { id: 67, date: new Date(), category: "Impôts", title: "Taxes locales", amount: 300, type: "sortie" },
  { id: 68, date: new Date(), category: "Impôts", title: "Taxe d'habitation", amount: 400, type: "sortie" },
  { id: 69, date: new Date(), category: "Impôts", title: "Cotisations sociales", amount: 200, type: "sortie" },
  { id: 70, date: new Date(), category: "Impôts", title: "Autres taxes", amount: 100, type: "sortie" },

  // Remboursements
  { id: 71, date: new Date(), category: "Remboursements", title: "Remboursement carte de crédit", amount: 500, type: "sortie" },
  { id: 72, date: new Date(), category: "Remboursements", title: "Remboursement prêt personnel", amount: 300, type: "sortie" },
  { id: 73, date: new Date(), category: "Remboursements", title: "Remboursement prêt étudiant", amount: 400, type: "sortie" },
  { id: 74, date: new Date(), category: "Remboursements", title: "Remboursement prêt immobilier", amount: 1000, type: "sortie" },
  { id: 75, date: new Date(), category: "Remboursements", title: "Remboursement prêt auto", amount: 250, type: "sortie" },

  // Épargne
  { id: 76, date: new Date(), category: "Épargne", title: "Épargne retraite", amount: 200, type: "entree" },
  { id: 77, date: new Date(), category: "Épargne", title: "Épargne pour vacances", amount: 150, type: "entree" },
  { id: 78, date: new Date(), category: "Épargne", title: "Compte épargne", amount: 300, type: "entree" },
  { id: 79, date: new Date(), category: "Épargne", title: "Plan d'épargne entreprise", amount: 400, type: "entree" },
  { id: 80, date: new Date(), category: "Épargne", title: "Cagnotte pour un projet", amount: 100, type: "entree" },

  // Investissements
  { id: 81, date: new Date(), category: "Investissements", title: "Achat de crypto-monnaie", amount: 500, type: "sortie" },
  { id: 82, date: new Date(), category: "Investissements", title: "Investissement dans l'immobilier", amount: 5000, type: "sortie" },
  { id: 83, date: new Date(), category: "Investissements", title: "Fonds commun de placement", amount: 2000, type: "sortie" },
  { id: 84, date: new Date(), category: "Investissements", title: "Investissement dans une start-up", amount: 3000, type: "sortie" },
  { id: 85, date: new Date(), category: "Investissements", title: "Achat d'obligations", amount: 1500, type: "sortie" },

  // Dons
  { id: 86, date: new Date(), category: "Dons", title: "Don à une école", amount: 100, type: "sortie" },
  { id: 87, date: new Date(), category: "Dons", title: "Don à une église", amount: 50, type: "sortie" },
  { id: 88, date: new Date(), category: "Dons", title: "Don à une fondation", amount: 200, type: "sortie" },
  { id: 89, date: new Date(), category: "Dons", title: "Don à un refuge pour animaux", amount: 75, type: "sortie" },
  { id: 90, date: new Date(), category: "Dons", title: "Don à un organisme de santé", amount: 150, type: "sortie" },

  // Voyages
  { id: 91, date: new Date(), category: "Voyages", title: "Hôtel", amount: 500, type: "sortie" },
  { id: 92, date: new Date(), category: "Voyages", title: "Location de voiture", amount: 200, type: "sortie" },
  { id: 93, date: new Date(), category: "Voyages", title: "Excursions", amount: 150, type: "sortie" },
  { id: 94, date: new Date(), category: "Voyages", title: "Assurance voyage", amount: 100, type: "sortie" },
  { id: 95, date: new Date(), category: "Voyages", title: "Restaurants", amount: 250, type: "sortie" },

  // Shopping
  { id: 96, date: new Date(), category: "Shopping", title: "Achat de chaussures", amount: 100, type: "sortie" },
  { id: 97, date: new Date(), category: "Shopping", title: "Achat de bijoux", amount: 200, type: "sortie" },
  { id: 98, date: new Date(), category: "Shopping", title: "Achat d'accessoires", amount: 50, type: "sortie" },
  { id: 99, date: new Date(), category: "Shopping", title: "Cadeaux", amount: 150, type: "sortie" },
  { id: 100, date: new Date(), category: "Shopping", title: "Vêtements de sport", amount: 80, type: "sortie" },

  // Beauté
  { id: 101, date: new Date(), category: "Beauté", title: "Manucure", amount: 30, type: "sortie" },
  { id: 102, date: new Date(), category: "Beauté", title: "Soin du visage", amount: 60, type: "sortie" },
  { id: 103, date: new Date(), category: "Beauté", title: "Produits de beauté", amount: 40, type: "sortie" },
  { id: 104, date: new Date(), category: "Beauty", title: "Maquillage", amount: 20, type: "sortie" },
  { id: 105, date: new Date(), category: "Beauty", title: "Cafe", amount: 10, type: "sortie" },

  { id: 104, date: new Date(), category: "Beauté", title: "Coiffure", amount: 100, type: "sortie" },
  { id: 105, date: new Date(), category: "Beauté", title: "Épilation", amount: 50, type: "sortie" },

  // Animaux
  { id: 106, date: new Date(), category: "Animaux", title: "Visite chez le vétérinaire", amount: 100, type: "sortie" },
  { id: 107, date: new Date(), category: "Animaux", title: "Toilettage", amount: 60, type: "sortie" },
  { id: 108, date: new Date(), category: "Animaux", title: "Jouets pour animaux", amount: 20, type: "sortie" },
  { id: 109, date: new Date(), category: "Animaux", title: "Accessoires pour animaux", amount: 30, type: "sortie" },
  { id: 110, date: new Date(), category: "Animaux", title: "Nourriture pour chien", amount: 50, type: "sortie" },

  // Entretien maison
  { id: 111, date: new Date(), category: "Entretien maison", title: "Nettoyage de la maison", amount: 100, type: "sortie" },
  { id: 112, date: new Date(), category: "Entretien maison", title: "Jardinage", amount: 150, type: "sortie" },
  { id: 113, date: new Date(), category: "Entretien maison", title: "Peinture", amount: 200, type: "sortie" },
  { id: 114, date: new Date(), category: "Entretien maison", title: "Réparation d'appareils", amount: 80, type: "sortie" },
  { id: 115, date: new Date(), category: "Entretien maison", title: "Achat de matériel de nettoyage", amount: 30, type: "sortie" },

  // Autres
  { id: 116, date: new Date(), category: "Autres", title: "Cadeaux divers", amount: 100, type: "sortie" },
  { id: 117, date: new Date(), category: "Autres", title: "Achat de billets de loterie", amount: 20, type: "sortie" },
  { id: 118, date: new Date(), category: "Autres", title: "Donations diverses", amount: 50, type: "sortie" },
  { id: 119, date: new Date(), category: "Autres", title: "Frais bancaires", amount: 10, type: "sortie" },
  { id: 120, date: new Date(), category: "Autres", title: "Frais d'adhésion", amount: 40, type: "sortie" }
];







