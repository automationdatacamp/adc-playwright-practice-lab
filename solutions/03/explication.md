# Correction 3

Défauts du test d'origine :
- le `try/catch` avale l'échec d'un clic : le test passe même si la commande ne marche pas ;
- la seule assertion (`count()` vaut 1) est vraie dès le chargement de la page ;
- les sélecteurs CSS positionnels (`li:nth-child(1)`) cassent au moindre changement de liste ;
- aucun cas d'échec (panier vide).

La version corrigée utilise des rôles accessibles, vérifie le total puis la confirmation, et couvre le panier vide.
