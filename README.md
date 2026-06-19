Description du projet

Ce projet consiste en une application météo composée d'un frontend et d'un backend,
conteneurisés séparément et orchestrés via Docker Compose. L'objectif est d'assurer une
gestion automatisée du déploiement et des tests grâce à une pipeline CI/CD.

Architecture : 
- L'application est séparée en deux services indépendants mais communicants :
          Backend : Développé avec Node.js + Express.
          Frontend : Interface utilisateur en HTML/CSS/JS servie par Nginx
          Orchestration : Gestion des conteneurs via docker-compose.yml
  
Prérequis : Docker et Docker Compose installés sur votre machine

Installation et Lancement
Pour lancer l'application localement, exécutez la commande suivante à la racine du projet: 
* docker-compose up --build
* Le backend sera accessible sur le port 3000.
* Le frontend sera accessible sur le port 80.

CI/CD
- Le projet intègre une automatisation du workflow via  GitHub Actions]:
  1.Build : Récupération du code et construction automatique des images Docker
  2.Test : Vérification des dépendances et de l'accessibilité des services.
  3.Déploiement : Déploiement automatique si les tests sont validés.

Auteur
Heriniaina Tiavina
