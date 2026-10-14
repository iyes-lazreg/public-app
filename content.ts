export type Group = { slug: string; title: string; desc: string; items: [string, string][] };
export const groups: Group[] = [
  { slug: "ventes", title: "Ventes", desc: "Du devis au bon de sortie, toute la chaîne de vente avec transformation en un clic d'un document à l'autre.",
    items: [["Devis", "Créez, envoyez et convertissez en commande ou en facture."], ["Commande de vente", "Suivez les quantités livrées et restantes."], ["Bon de livraison", "Génération depuis la commande, livraisons partielles."], ["Bon de sortie", "Sortie de stock par dépôt, liée à la livraison."], ["Facture", "TVA, timbre fiscal, remises et retenue à la source."]] },
  { slug: "achats", title: "Achats", desc: "Maîtrisez vos achats fournisseurs, de la commande à la réception et au règlement.",
    items: [["Commande d'achat", "Envoyez vos commandes et suivez les reliquats."], ["Bon de réception", "Entrée en stock par dépôt, contrôle des écarts."], ["Bon d'achat", "Enregistrez vos achats et factures fournisseurs."]] },
  { slug: "tresorerie", title: "Trésorerie & paiements", desc: "Banques, caisses et paiements : sachez d'où part et où arrive chaque dinar.",
    items: [["Comptes bancaires et caisses", "Soldes en temps réel, multi-comptes."], ["Paiements clients et fournisseurs", "Paiement total, partiel ou échelonné."], ["Chèques, traites, ordres de virement", "Impression sur les modèles conformes aux usages tunisiens."], ["Échéancier", "Impayés et échéances à venir en un coup d'œil."]] },
  { slug: "partenaires", title: "Clients, fournisseurs & espace partenaire", desc: "Un dossier par partenaire, et un espace dédié pour qu'il consulte ses propres documents.",
    items: [["Fiches clients et fournisseurs", "Coordonnées, matricule fiscal, conditions de paiement."], ["Espace partenaire", "Le partenaire voit ses documents, filtre, et repère ceux payés ou échus."], ["Suivi des soldes", "Encours et historique par partenaire."]] },
  { slug: "stock", title: "Stock & dépôts", desc: "Quantités par produit, mouvements tracés et plusieurs dépôts.",
    items: [["Multi-dépôts", "Stock par dépôt et transferts entre dépôts."], ["Mouvements de stock", "Chaque entrée et sortie est liée à son document."], ["Alertes de seuil", "Soyez prévenu avant la rupture."]] },
  { slug: "rh-paie", title: "RH & paie", desc: "Suivez vos employés : présence, emplois du temps, congés et paie.",
    items: [["Présence et pointage", "Tableau de bord des employés présents en ce moment."], ["Emplois du temps et absences", "Plannings, congés et jours d'absence."], ["Fichier de paie", "Génération du fichier de paie de vos employés."], ["Suivi des paiements", "Salaires, avances et historique."]] },
  { slug: "conformite", title: "Conformité TTN & TEJ", desc: "Documents au format attendu par la TTN, signature électronique et synchronisation avec la plateforme TEJ.",
    items: [["Facture électronique TTN", "Export et synchronisation au format conforme."], ["Signature électronique", "Signez vos documents depuis TunSuite."], ["Synchronisation TEJ", "Données de conformité envoyées à la plateforme TEJ."], ["Export international", "Règles d'export adaptées aux pays d'importation."]] },
  { slug: "comptabilite", title: "Comptabilité & retenue à la source", desc: "Les états demandés en Tunisie, prêts à exporter, et la retenue à la source gérée sur vos ventes et achats.",
    items: [["Exports comptables", "Documents de conformité exigés en Tunisie."], ["Retenue à la source", "Calcul et suivi, côté ventes et côté achats."], ["TVA et timbre", "Taux tunisiens appliqués automatiquement."]] },
  { slug: "crm", title: "CRM", desc: "Gérez vos prospects et transformez-les en clients sans ressaisie.",
    items: [["Prospects", "Contacts, coordonnées et statut."], ["Conversion en client", "Un clic, toutes les données reprises."], ["Synchronisé avec les devis", "Le devis et la fiche prospect restent à jour ensemble."]] },
  { slug: "point-de-vente", title: "Point de vente (POS)", desc: "Caisse rapide, plusieurs points de vente, stock et trésorerie mis à jour à chaque ticket.",
    items: [["Multi-POS", "Plusieurs caisses, plusieurs magasins."], ["Encaissement", "Espèces, carte, chèque."], ["Clôture de caisse", "Rapprochement avec la trésorerie."]] },
  { slug: "multi-entreprise", title: "Multi-entreprise & utilisateurs", desc: "Pilotez plusieurs sociétés depuis un tableau de bord unique, avec des droits précis par utilisateur.",
    items: [["Tableau de bord multi-entreprise", "Vue consolidée de vos sociétés."], ["Utilisateurs par entreprise", "Donnez accès à une ou plusieurs entreprises."], ["Permissions CRUD par module", "Créer, lire, modifier, supprimer : module par module."]] },
  { slug: "rapports-support", title: "Rapports & support", desc: "Des rapports clairs pour décider, et un module de tickets pour être aidé.",
    items: [["Rapports", "Ventes, achats, stock, trésorerie, RH."], ["Tickets d'assistance", "Posez votre question depuis l'application et suivez la réponse."]] },
];

export const onPrem = [
  { slug: "poste-windows", name: "Poste Windows", tag: "Un seul PC", price: "À définir", features: ["Tous les modules", "Application Windows installée sur votre PC", "Un utilisateur sur un poste", "Licence achetée une seule fois"] },
  { slug: "serveur", name: "Serveur", tag: "Multi-utilisateurs", price: "À définir", features: ["Tous les modules", "Installé sur votre serveur interne ou privé", "Plusieurs utilisateurs en réseau", "Licence achetée une seule fois"] },
  { slug: "code-source", name: "Code source", tag: "Tout inclus + code ouvert", price: "À définir", features: ["Tous les modules et toutes les fonctions", "Code source fourni pour personnalisation", "Multi-utilisateurs", "Licence achetée une seule fois"] },
];
export const cloud = {
  name: "Cloud", price: "À définir", unit: "TND / mois",
  features: ["Tous les modules", "1 utilisateur inclus", "Mises à jour et sauvegardes incluses", "Accessible partout, sans installation"],
  addons: ["Utilisateur supplémentaire", "Entreprise supplémentaire"],
};

export const faqs: [string, string][] = [
  ["TunSuite est-il adapté à la législation tunisienne ?", "Oui. TVA, timbre fiscal, retenue à la source, facture électronique TTN, TEJ et documents comptables sont pensés pour les entreprises opérant en Tunisie."],
  ["Puis-je exporter vers l'étranger ?", "Oui. TunSuite gère les documents d'export en respectant les règles du commerce international et celles du pays d'importation."],
  ["Quelle est la différence entre sur site et cloud ?", "Le sur site s'achète une fois et s'installe chez vous. Le cloud est un abonnement avec un utilisateur inclus, extensible en utilisateurs et en entreprises."],
  ["Comment télécharger l'application Windows ?", "Depuis la page Télécharger. L'activation se fait avec la licence obtenue après votre commande."],
  ["Puis-je gérer plusieurs entreprises ?", "Oui, avec un tableau de bord multi-entreprise et des droits distincts par utilisateur et par module."],
  ["Mes clients et fournisseurs peuvent-ils suivre leurs documents ?", "Oui, via l'espace partenaire : ils filtrent leurs documents et voient ce qui est payé ou échu."],
];

export const posts = [
  { slug: "facture-electronique-ttn-guide-pme", title: "Facture électronique TTN : par où commencer pour une PME", date: "2026-01-15", excerpt: "Les étapes à préparer avant de passer à la facture électronique.", body: ["Article à rédiger. Ce contenu est un modèle pour votre futur blog.", "Ajoutez ici vos conseils, exemples et captures d'écran."] },
  { slug: "retenue-a-la-source-ventes-achats", title: "Retenue à la source : ventes et achats expliqués", date: "2026-02-10", excerpt: "Comprendre la retenue à la source et l'enregistrer correctement.", body: ["Article à rédiger. Ce contenu est un modèle pour votre futur blog.", "Ajoutez ici vos explications et vos cas pratiques."] },
];

export type Legal = { title: string; desc: string; sections: [string, string][] };
export const legal: Record<string, Legal> = {
  "mentions-legales": { title: "Mentions légales", desc: "Informations légales sur l'éditeur de TunSuite.", sections: [["Éditeur", "[Raison sociale], [forme juridique], [matricule fiscal], [adresse], Tunisie."], ["Contact", "Voir la page Contact."], ["Hébergement", "[Nom et adresse de l'hébergeur]."], ["Propriété intellectuelle", "Les contenus du site sont protégés. Toute reproduction sans autorisation est interdite."]] },
  confidentialite: { title: "Politique de confidentialité", desc: "Comment TunSuite collecte et protège vos données personnelles.", sections: [["Données collectées", "Identité, coordonnées, données d'utilisation nécessaires au service."], ["Finalités", "Fournir le service, assistance, facturation, sécurité."], ["Vos droits", "Accès, rectification et suppression, conformément à la loi tunisienne sur la protection des données personnelles."], ["Contact", "Demandes à adresser à l'adresse indiquée sur la page Contact."]] },
  cgu: { title: "Conditions générales d'utilisation", desc: "Conditions d'utilisation et de vente de TunSuite (sur site et cloud).", sections: [["Objet", "Les présentes conditions encadrent l'utilisation de TunSuite."], ["Licence sur site", "Achat unique d'une licence selon la formule choisie (Poste Windows, Serveur, Code source)."], ["Abonnement cloud", "Abonnement incluant un utilisateur, extensible en utilisateurs et en entreprises."], ["Responsabilités", "[À compléter avec votre conseil juridique]."]] },
  conformite: { title: "Conformité et réglementation", desc: "TunSuite et la réglementation tunisienne : TTN, TEJ, retenue à la source, export.", sections: [["Facturation électronique TTN", "Les documents peuvent être exportés et synchronisés au format attendu par la TTN, avec signature électronique."], ["Plateforme TEJ", "Les données de conformité sont synchronisées avec la plateforme TEJ."], ["Retenue à la source", "Gérée sur les ventes et les achats."], ["Export et commerce international", "Les documents d'export suivent les règles du commerce international et celles des pays d'importation."], ["Avertissement", "[Brouillon : à faire valider par un expert-comptable ou juriste avant publication.]"]] },
};

export const windowsApp = {
  requirements: ["Windows 10 ou 11 (64 bits)", "4 Go de RAM minimum", "2 Go d'espace disque libre"], // à confirmer
  steps: [["Téléchargez l'installateur", "Cliquez sur le bouton de téléchargement ci-dessus."], ["Lancez l'installation", "Double-cliquez sur le fichier et suivez l'assistant."], ["Activez votre licence", "Saisissez la clé reçue après votre commande. Notre équipe vous accompagne par téléphone."]] as [string, string][],
};
