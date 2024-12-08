-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `code_postal` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bouton` (
    `bouton_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `couleur` VARCHAR(191) NULL,
    `prix` DOUBLE NULL,

    PRIMARY KEY (`bouton_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fil` (
    `fil_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `couleur` VARCHAR(191) NULL,
    `prix` DOUBLE NULL,

    PRIMARY KEY (`fil_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tissu` (
    `tissu_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,

    PRIMARY KEY (`tissu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Commande` (
    `commandes_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `mesures_id` INTEGER NOT NULL,
    `adresses_id` INTEGER NOT NULL,
    `commandes_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'en cours',
    `total` DOUBLE NOT NULL,

    PRIMARY KEY (`commandes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mesure` (
    `mesures_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `manches` DOUBLE NOT NULL,
    `epaules` DOUBLE NOT NULL,
    `poitrine` DOUBLE NOT NULL,
    `ventre` DOUBLE NOT NULL,
    `jambe` DOUBLE NOT NULL,
    `taille` DOUBLE NOT NULL,
    `hanche` DOUBLE NOT NULL,
    `cuisse` DOUBLE NOT NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`mesures_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `paiement_id` INTEGER NOT NULL AUTO_INCREMENT,
    `commande_id` INTEGER NOT NULL,
    `montant` DOUBLE NOT NULL,
    `methode` VARCHAR(191) NOT NULL,
    `date_paiement` DATETIME(3) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`paiement_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RendezVous` (
    `rendezvous_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `tailleur_id` INTEGER NOT NULL,
    `date_rdv` DATETIME(3) NOT NULL,
    `lieu` VARCHAR(191) NOT NULL,
    `adresse_rdv` VARCHAR(191) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rendezvous_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veste` (
    `veste_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`veste_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Commande` ADD CONSTRAINT `Commande_mesures_id_fkey` FOREIGN KEY (`mesures_id`) REFERENCES `Mesure`(`mesures_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mesure` ADD CONSTRAINT `Mesure_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_commande_id_fkey` FOREIGN KEY (`commande_id`) REFERENCES `Commande`(`commandes_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RendezVous` ADD CONSTRAINT `RendezVous_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
