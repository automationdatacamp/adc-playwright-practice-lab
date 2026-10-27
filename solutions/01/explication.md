# Correction 1

Le test d'origine vérifie un message, pas le résultat. Quand la remise n'est plus appliquée, le message s'affiche toujours : le test reste vert alors que le client paie 50 € au lieu de 45 €.

La version corrigée vérifie le total (`45,00 €`) et ajoute le cas d'un code invalide. Avec `BUG=remise`, elle devient rouge : c'est son rôle.
