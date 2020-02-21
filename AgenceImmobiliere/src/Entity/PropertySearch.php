<?php

namespace App\Entity;

use Symfony\component\Validator\constraints as Assert;

class PropertySearch
{
    /**
     * @var int|null
     */
    private $maxPrice;

    /**
     * @var int|null
     * @Assert\Range(min=10, max= 400)
     */
    private $minSurface;


    /**
     * @return int|null
     */
    public function getMaxPrice(): ?int
    {
        return $this->maxPrice;
    }

    /**
     * @param int|null $maxPrice
     * @return PropertySearch
     */
    public function setMaxPrice(int $maxPrice): PropertySearch
    {
        $this->maxPrice = $maxPrice;
        return $this;
    }

    /**
     * @return int|null
     */
    public function getMinSurface(): ?int
    {
        return $this->minSurface;

    }

    /**
     * @param int|null $minSurface
     * @return PropertySearch
     */
    public function setMinSurface($minSurface): PropertySearch
    {
        $this->minSurface = $minSurface;
        return $this;
    }
}